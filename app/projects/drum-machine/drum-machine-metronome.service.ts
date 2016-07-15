import { Injectable } from '@angular/core';

@Injectable()
export class DrumMachineMetronomeService {

    private timeWorker: any = null;
    private noteTime: number;
    private startTime: number;
    private currentTime: number;
    private rhythmIndex: number = 1;
    private tempo: number = 100;
    private nextNoteTime: number = 0;
    private lookahead: number = 25.0;
    private scheduleAheadTime: number = .2;
    private noteLength: number = .25;
    private context: any;
    private isPlaying: boolean = false;

    private sequencerLineUp: Object = null;

    init() {
        console.log('initated');
        this.context = new AudioContext();
        this.timeWorker = new Worker('./app/projects/drum-machine/timeWorker.js');
        console.log(this.timeWorker);
        this.timeWorker.onmessage = (e: any) => {
            if (e.data === 'tick') { this.schedule(); } else { console.log(e.data); }
        };
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
        let secondsPerBeat = 60 / this.tempo;
        this.nextNoteTime += .25 * secondsPerBeat;
        this.rhythmIndex++;
        if (this.rhythmIndex === 16) { this.rhythmIndex = 0; }
    }

    setSequencerLineUp(sequence: Object) {
        this.sequencerLineUp = sequence;
    }

    setBeat(time: number, beat: number) {
        console.log('k', this.sequencerLineUp[beat]['kick'], beat);
        console.log('s', this.sequencerLineUp[beat]['snare'], beat);
        if (this.sequencerLineUp[beat]['kick']) { this.kickDrum(time, 140, 0, 1); }
        if (this.sequencerLineUp[beat]['snare']) { this.snareDrum(time, 500, 0, 1); }

    }

    kickDrum(time: any, freq: number, attack: number, decay: number) {
        let _freq = freq;
        let noteLength = this.noteLength;
        // 0 is fast attack. 1 is slowest attck. .5 is mid attack 
        let _attack = time + (noteLength * attack);
        // 0 is big decay. 1 is no decay. .5 is mid decay
        let _decay = time + (noteLength * decay);

        let kickOsc = this.context.createOscillator();
        kickOsc.type = 'sine';
        kickOsc.frequency.value = _freq;
        kickOsc.start(time);
        kickOsc.stop(time + noteLength);
        let kickGain = this.context.createGain();
        kickOsc.connect(kickGain);
        kickGain.connect(this.context.destination);

        // set attack
        kickGain.gain.setValueAtTime(0, time);
        kickGain.gain.linearRampToValueAtTime(1.0, _attack);
        kickGain.gain.linearRampToValueAtTime(0.0, _decay);

    }

    snareDrum(time: any, freq: number, attack: number, decay: number) {
        let _freq = freq;
        let noteLength = this.noteLength;
        // 0 is fast attack. 1 is slowest attck. .5 is mid attack 
        let _attack = time + (noteLength * attack);
        // 0 is big decay. 1 is no decay. .5 is mid decay
        let _decay = time + (noteLength * decay);

// SNARE TONE
        let snareOsc = this.context.createOscillator();
        snareOsc.type = 'sine';
        snareOsc.frequency.value = _freq;
        snareOsc.start(time);
        snareOsc.stop(time + noteLength);

// SNARE WHITE NOISE
        let snareNoise = this.context.createBufferSource(),
            buffer = this.context.createBuffer(1, 4096, this.context.sampleRate),
            data = buffer.getChannelData(0);
        for (let i = 0; i < 4096; i++) { data[i] = Math.random(); }
        snareNoise.buffer = buffer;
        snareNoise.loop = true;
        snareNoise.start(time);
        snareNoise.stop(time + noteLength);

// GAIN
        let snareGain = this.context.createGain();
        // set attack and decay
        snareGain.gain.setValueAtTime(0, time);
        snareGain.gain.linearRampToValueAtTime(1.0, _attack);
        snareGain.gain.linearRampToValueAtTime(0.0, _decay);


// CONNECTIONS
        snareOsc.connect(snareGain);
        snareNoise.connect(snareGain);
        snareGain.connect(this.context.destination);

    }
}
