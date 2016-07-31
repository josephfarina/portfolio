import { Injectable } from '@angular/core';
let TimeWorker = require('worker?inline!./timeWorker.js');

@Injectable()
export class DrumMachineService {
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
    private instruments: string[] = ['kick', 'snare', 'lowtom', 'midtom', 'hitom', 'rimshot', 'clap', 'hihat', 'cymbal'];
    private sampleBuffers: Object = {
        '808': {},
        '909': {},
        'acoustic': {}
    };

    init() {
        this.context = new AudioContext();
        this.loadDrumKit();
        this.timeWorker = new TimeWorker();
        this.timeWorker.onmessage = (e: any) => {
            if (e.data === 'tick') {
                this.schedule();
            } else {
                console.log(e.data);
            }
        };
        // WHY?
        this.timeWorker.postMessage({ 'interval': this.lookahead });
    }

    play() {
        if (!this.isPlaying) {
            this.context = new AudioContext();
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

    setSequencerLineUp(sequence: Object) {
        this.sequencerLineUp = sequence;
    }

    schedule() {
        // Normalize the current time
        this.currentTime = this.context.currentTime - this.startTime;
        // Only set notes within the specified schedule ahead time
        while (this.nextNoteTime < this.context.currentTime + this.scheduleAheadTime) {
            this.setBeat(this.nextNoteTime, this.rhythmIndex);
            this.nextNote();
        }
    }

    nextNote() {
        this.tempo = ( (this.sequencerLineUp['projectSettings']['tempo'] * 120) + 60) / 2;
        let secondsPerBeat = 60 / this.tempo;
        this.nextNoteTime += this.noteLength * secondsPerBeat;
        this.rhythmIndex++;
        if (this.rhythmIndex === 16) { this.rhythmIndex = 0; }
    }

    setBeat(time: number, beat: number) {
        this.setBeatValueAtTime(time, beat);
        this.instruments.forEach( (instrument) => {
            if (this.sequencerLineUp['rhythmSettings'][beat][instrument]) {
                this.playSample(instrument, time, beat);
            }
        });
    }

    setBeatValueAtTime(time: number, beat: number) {
        // Sets the beat when it is actually going to be fired. Due to the lookahead.
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

    /**
     * * Functions used to handle the instrument's knobs
    */

    globalVolume(beat: number) {
        let level = this.context.createGain(),
            volume = this.sequencerLineUp['projectSettings']['volume'];
        if (volume > 1) { volume = 1; }

        // Handles the accent knobs data
        if (beat === 0 || beat === 4 || beat === 8 || beat === 12) { 
            volume += this.sequencerLineUp['projectSettings']['accent'];
        }

        level.gain.value = volume;
        return level;
    }

    level(type: string) {
        let level = this.context.createGain(),
            levelLevel = this.sequencerLineUp['instrumentSettings'][type]['level'];
        if (levelLevel > 1) { levelLevel = 1; }
        level.gain.value = levelLevel;
        return level;
    }

    decay(type: string, time: number) {
        let decay = this.context.createGain(),
            decayLevel = 1 - this.sequencerLineUp['instrumentSettings'][type]['decay'];
        if (decayLevel > 1) { decayLevel = 1; }
        decay.gain.setValueAtTime(1, time);
        let decayValue = (time + this.noteLength + (this.noteLength * .25)) - (this.noteLength * (1 - decayLevel));
        decay.gain.linearRampToValueAtTime(0, decayValue);
        return decay;
    }

    attack(type: string, time: number) {
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
        // Function found on Mozilla Developer
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

    // Used to offset the additional volume created by distortion
    distortionGain(type: string) {
        let level = this.context.createGain(),
            levelLevel = this.sequencerLineUp['instrumentSettings'][type]['level'];
        if (levelLevel > 1) { levelLevel = 1; }
        level.gain.value = .8 - (this.sequencerLineUp['instrumentSettings'][type]['distortion'] * .5);
        return level;
    }

    loadDrumKit() {
        let kits: string[] = ['808', '909', 'acoustic'],
            samples: string[] = this.instruments,
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
