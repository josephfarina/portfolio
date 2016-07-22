import { Injectable } from '@angular/core';

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
    private scheduleAheadTime: number = .2;
    private noteLength: number = .25;
    private context: any;
    private isPlaying: boolean = false;

    private sequencerLineUp: Object = null;


    private sampleBuffers: Object = {};
    private impulse: any;
    private samples: string[] = ['snare', 'clap', 'kick', 'cymbal', 'hihat', 'hitom', 'lowtom', 'midtom', 'rimshot'];

    init() {
        this.loadAudioSamples();

        console.log('initated');
        this.context = new AudioContext();
        this.timeWorker = new Worker('./app/projects/drum-machine/timeWorker.js');
        console.log(this.timeWorker);
        this.timeWorker.onmessage = (e: any) => { if (e.data === 'tick') { this.schedule(); } else { console.log(e.data); } };
        this.timeWorker.postMessage({ 'interval': this.lookahead });
    }

    play() {
        if (!this.isPlaying) {
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
        this.tempo = this.sequencerLineUp['projectSettings']['tempo'];
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
        if (this.sequencerLineUp['rhythmSettings'][beat]['kick']) { this.playSample('kick', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['snare']) { this.playSample('snare', time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['lowtom']) { this.playSample('lowtom', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['midtom']) { this.playSample('midtom', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['hitom']) { this.playSample('hitom', time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['rimshot']) { this.playSample('rimshot', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['clap']) { this.playSample('clap', time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['hihat']) { this.playSample('hihat', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['cymbal']) { this.playSample('cymbal', time); }
    }

    playSample(type: string, time: number) {
        let source = this.context.createBufferSource(),
            level = this.level(type),
            decay = this.decay(type, time),
            volume = this.globalVolume(),
            attack = this.attack(type, time),
            distortion = this.distortion(type);

        source.connect(decay);
        decay.connect(attack);
        attack.connect(level);
        level.connect(distortion);
        distortion.connect(volume);

        volume.connect(this.context.destination);
        source.buffer = this.sampleBuffers[type];
        source.start(time);
    }

// get the value for each of these settings from the sequencerLineUp by type
    globalVolume() {
        let level = this.context.createGain(),
            volume = this.sequencerLineUp['projectSettings']['volume'];

        if (volume > 1) { volume = 1; }
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
        if (decayLevel === 0) {decayLevel = .05; };
        if (decayLevel > 1) { decayLevel = 1; }
        decay.gain.setValueAtTime(1, time);
        decay.gain.linearRampToValueAtTime(0, time + (this.noteLength * decayLevel));
        return decay;
    }

    attack(type: string, time: number) {
        // 1 is the MAX attack -- the softest note -- 0 is the hardest and fastest
        let attack = this.context.createGain(),
            attackLevel = this.sequencerLineUp['instrumentSettings'][type]['attack'] * .1; // the .1 is to make it so it doesnt get too soft

        if (attackLevel > 1) { attackLevel = 1; }
        attack.gain.setValueAtTime(0, time);
        attack.gain.linearRampToValueAtTime(1, time + (this.noteLength * attackLevel));
        return attack;
    }

    distortion(type: string) {
        let distortion = this.context.createWaveShaper();
        let distortionAmount: number;
        if (this.sequencerLineUp['instrumentSettings'][type]['distortion']) {
            distortionAmount = this.sequencerLineUp['instrumentSettings'][type]['distortion'] * 100;
        } else { distortionAmount = 0; }

        // i have no idea how this works -- found on Mozilla
        function makeDistortionCurve(amount: number) {
            let k = typeof amount === 'number' ? amount : 50,
                n_samples = 44100,
                curve = new Float32Array(n_samples),
                deg = Math.PI / 180,
                i = 0,
                x: any;
                for ( ; i < n_samples; ++i ) {
                    x = i * 2 / n_samples - 1;
                    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
                }
            return curve;
        };
        distortion.curve = makeDistortionCurve(distortionAmount);
        distortion.oversample = '4x';
        return distortion;
    }

    getAudioContext(): any {
        return this.context;
    }

    loadAudioSamples() {
        let urlBody = 'public/909_Samples/';

        for (let i = 0; i < this.samples.length; i++) {
            let request = new XMLHttpRequest();
            request.open('GET', urlBody + this.samples[i] + '.wav', true);
            request.responseType = 'arraybuffer';
            request.onload = () => {
                this.context.decodeAudioData(request.response).then((decodedData: any) => {
                    this.sampleBuffers[this.samples[i]] = decodedData;

                }, (e: any) => { console.log('Error with decoding audio data' + e.err); });
            };
            request.send();
        }

        let impulse = new XMLHttpRequest();
        impulse.open('GET', urlBody + 'FatMansMisery.wav', true);
        impulse.responseType = 'arraybuffer';
        impulse.onload = () => {;
            this.context.decodeAudioData(impulse.response).then((decodedData: any) => {
                this.impulse = decodedData;

            }, (e: any) => { console.log('Error with decoding audio data' + e.err); });
        };
        impulse.send();
    }

}
