import { Injectable } from '@angular/core';
let TimeWorker = require('worker?inline!./timeWorker.js');

@Injectable()
export class DrumMachineMetronomeService {
    private timeWorker: any = null;
    private noteTime: number;
    private startTime: number;
    private currentTime: number;
    private rhythmIndex: number = 1;
    private tempo: number;
    private nextNoteTime: number = 0;
    private lookahead: number = 25.0;
    private scheduleAheadTime: number = .5;
    private noteLength: number = .25;
    private context: any;
    private isPlaying: boolean = false;
    private sequencerLineUp: Object = null;
    private sampleBuffers: Object = {
        '808': {},
        '909': {},
        'acoustic': {}
    };
    private impulse: any;

    init() {
        this.loadDrumKit();
        console.log(this.sampleBuffers);
        this.createAudioContext();
        this.timeWorker = new TimeWorker();
        this.timeWorker.onmessage = (e: any) => { if (e.data === 'tick') { this.schedule(); } else { console.log(e.data); } };
        this.timeWorker.postMessage({ 'interval': this.lookahead });
    }

    createAudioContext() {
        this.context = new AudioContext();
    }

    play() {
        if (!this.isPlaying) {
            this.createAudioContext();
            this.isPlaying = true;
            this.noteTime = 0;
            this.rhythmIndex = 0;
            this.nextNoteTime = 0;
            this.startTime = this.context.currentTime;
            this.timeWorker.postMessage('start');
        }
    }

    stop() {
        if (this.isPlaying) {
            this.isPlaying = false;
            this.timeWorker.postMessage('stop');
            this.context.close();
        }
    }

    schedule() {
        this.currentTime = this.context.currentTime - this.startTime;
        while (this.nextNoteTime < this.context.currentTime + this.scheduleAheadTime) {
            this.setBeat(this.nextNoteTime, this.rhythmIndex);
            this.nextNote();
        }
    }

    nextNote() {
        this.tempo = ((this.sequencerLineUp['projectSettings']['tempo'] * 120) + 60) / 2;
        let secondsPerBeat = 60 / this.tempo;
        this.nextNoteTime += this.noteLength * secondsPerBeat;
        this.rhythmIndex++;
        if (this.rhythmIndex === 16) { this.rhythmIndex = 0; }
    }

    setSequencerLineUp(sequence: Object) {
        this.sequencerLineUp = sequence;
    }

    setBeat(time: number, beat: number) {
        this.sequencerLineUp['projectSettings']['beat'] = beat;
        this.setBeatValueAtTime(time, beat);

        if (this.sequencerLineUp['rhythmSettings'][beat]['kick']) { this.playSample('kick', time, beat); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['snare']) { this.playSample('snare', time, beat); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['lowtom']) { this.playSample('lowtom', time, beat); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['midtom']) { this.playSample('midtom', time, beat); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['hitom']) { this.playSample('hitom', time, beat); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['rimshot']) { this.playSample('rimshot', time, beat); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['clap']) { this.playSample('clap', time, beat); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['hihat']) { this.playSample('hihat', time, beat); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['cymbal']) { this.playSample('cymbal', time, beat); }
    }

    setBeatValueAtTime(time: number, beat: number) {
        window.setTimeout(() => {
            this.sequencerLineUp['projectSettings']['beat'] = beat;
        }, (time - this.context.currentTime) * 1000);
    }


    playSample(drumType: string, time: number, beat: number) {
        let source = this.context.createBufferSource(),
            level = this.level(drumType),
            decay = this.decay(drumType, time),
            volume = this.globalVolume(beat),
            attack = this.attack(drumType, time),
            distortion = this.distortion(drumType),
            distortionGain = this.distortionGain(drumType);

        source.connect(decay);
        decay.connect(attack);
        attack.connect(level);
        level.connect(distortion);
        distortion.connect(distortionGain);
        distortionGain.connect(volume);

        volume.connect(this.context.destination);
        source.buffer = this.sampleBuffers[this.sequencerLineUp['projectSettings']['kit']][drumType];
        source.start(time);
    }

    // get the value for each of these settings from the sequencerLineUp by type
    globalVolume(beat: number) {
        let level = this.context.createGain(),
            volume = this.sequencerLineUp['projectSettings']['volume'];

        if (volume > 1) { volume = 1; }

        if (beat === 0 || beat === 4 || beat === 8 || beat === 12) {
            volume += this.sequencerLineUp['projectSettings']['accent'];
        }

        level.gain.value = volume;
        return level;
    }

    level(type: string) {
        let level = this.context.createGain(),
            levelLevel = this.sequencerLineUp['instrumentSettings'][type]['level'];

        // dont let level leval equal 0 -- it will not output a noise then
        if (levelLevel > 1) { levelLevel = 1; }
        level.gain.value = levelLevel;
        return level;
    }

    decay(type: string, time: number) {
        // 1 is the MAX decay -- the longest note -- 0 is the absolute shortest
        let decay = this.context.createGain(),
            decayLevel = 1 - this.sequencerLineUp['instrumentSettings'][type]['decay'];

        // dont let decay leval equal 0 -- it will not output a noise then
        if (decayLevel > 1) { decayLevel = 1; }
        decay.gain.setValueAtTime(1, time);
        // formula to calculate the decay level onto a 0 - 1 scale
        let decayValue = (time + this.noteLength + (this.noteLength * .25)) - (this.noteLength * (1 - decayLevel));
        decay.gain.linearRampToValueAtTime(0, decayValue);
        return decay;
    }

    attack(type: string, time: number) {
        // 1 is the MAX attack -- the softest note -- 0 is the hardest and fastest
        let attack = this.context.createGain(),
            attackLevel = this.sequencerLineUp['instrumentSettings'][type]['attack'] * .1; // the .1 is to make it so it doesnt get too soft

        if (attackLevel > 1) { attackLevel = 1; }
        attack.gain.setValueAtTime(0, time);
        attack.gain.linearRampToValueAtTime(1, time + (this.noteLength * (attackLevel * 10)));
        return attack;
    }

    distortion(type: string) {
        let distortion = this.context.createWaveShaper();
        let distortionAmount: number = this.sequencerLineUp['instrumentSettings'][type]['distortion'] * 100;

        // i have no idea how this function works -- found on Mozilla
        /* TODO: Make this more effiecient it is using 10% of the memory

            pb.stomp.OverdriveModel.prototype.createWSCurve = function(amount) {
                var k = amount;
                var n_samples = 22050;
                this.wsCurve = new Float32Array(n_samples);
                var deg = Math.PI / 180;
                for (var i = 0; i < n_samples; i += 1) {
                    var x = i * 2 / n_samples - 1;
                    this.wsCurve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
                }
                this.waveShaper.curve = this.wsCurve;
            };

            **
            * Sets the drive level.
            *
            * @param {number} newDrive Drive level to set.
            *
            pb.stomp.OverdriveModel.prototype.setDrive = function(newDrive) {
                this.createWSCurve(10 * newDrive);
            };


        */

        function makeDistortionCurve(amount: number) {
            let k = typeof amount === 'number' ? amount : 50,
                n_samples = 44100,
                curve = new Float32Array(n_samples),
                deg = Math.PI / 180,
                i = 0,
                x: any;
            for (; i < n_samples; ++i) {
                x = i * 2 / n_samples - 1;
                curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
            }
            return curve;
        };

        distortion.curve = makeDistortionCurve(distortionAmount);
        distortion.oversample = 'none';
        return distortion;
    }

    distortionGain(type: string) {
        let level = this.context.createGain(),
            levelLevel = this.sequencerLineUp['instrumentSettings'][type]['level'];

        // dont let level leval equal 0 -- it will not output a noise then
        if (levelLevel > 1) { levelLevel = 1; }
        level.gain.value = .8 - (this.sequencerLineUp['instrumentSettings'][type]['distortion'] * .5);
        return level;
    }

    getAudioContext(): any {
        return this.context;
    }

    loadDrumKit() {

        let kits: string[] = ['808', '909', 'acoustic'],
            samples: string[] = ['snare', 'clap', 'kick', 'cymbal', 'hihat', 'hitom', 'lowtom', 'midtom', 'rimshot'],
            urlBody = 'samples/';

        for (let kit = 0; kit < kits.length; kit++) {
            for (let sample = 0; sample < samples.length; sample++) {
                let request = new XMLHttpRequest();
                request.open('GET', urlBody + kits[kit] + '/' + samples[sample] + '.wav', true);
                request.responseType = 'arraybuffer';
                request.onload = () => {
                    this.context.decodeAudioData(request.response).then((decodedData: any) => {
                        this.sampleBuffers[kits[kit]][samples[sample]] = decodedData;
                    }, (e: any) => { console.log('Error with drum audio data' + e.err); });
                };
                request.send();
            }
        }
    }

}
