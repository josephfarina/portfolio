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
        // check the json file for the tempo to see if its changed
        this.tempo = this.sequencerLineUp['projectSettings']['tempo'];
        let secondsPerBeat = 60 / this.tempo;
        this.nextNoteTime += .25 * secondsPerBeat;
        this.rhythmIndex++;
        if (this.rhythmIndex === 16) { this.rhythmIndex = 0; }
    }

    setSequencerLineUp(sequence: Object) {
        this.sequencerLineUp = sequence;
    }

    setBeat(time: number, beat: number) {
        if (this.sequencerLineUp['rhythmSettings'][beat]['kick']) { this.kickDrum(time, 140, 0, 1); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['snare']) { this.snareDrum(time, 500, 0, 1); }
    }

    kickDrum(time: any, freq: number, attack: number, decay: number) {
        let osc = this.context.createOscillator();
        let osc2 = this.context.createOscillator();
        let gainOsc = this.context.createGain();
        let gainOsc2 = this.context.createGain();

        osc.type = 'triangle';
        osc2.type = 'sine';

        gainOsc.gain.setValueAtTime(1, time);
        gainOsc.gain.exponentialRampToValueAtTime(0.001, time + 0.5);

        gainOsc2.gain.setValueAtTime(1, time);
        gainOsc2.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
        osc.frequency.setValueAtTime(120, time);
        osc.frequency.exponentialRampToValueAtTime(0.001, time + 0.5);

        osc2.frequency.setValueAtTime(50, time);
        osc2.frequency.exponentialRampToValueAtTime(0.001, time + 0.5);

        osc.connect(gainOsc);
        osc2.connect(gainOsc2);
        gainOsc.connect(this.context.destination);
        gainOsc2.connect(this.context.destination);

        osc.start(time);
        osc2.start(time);

        osc.stop(time + 0.5);
        osc2.stop(time + 0.5);

        // // set attack
        // kickGain.gain.setValueAtTime(0, time);
        // kickGain.gain.linearRampToValueAtTime(1.0, _attack);
        // kickGain.gain.linearRampToValueAtTime(0.0, _decay);

    }

    snareDrum(time: any, freq: number, attack: number, decay: number) {
        let filterGain = this.context.createGain();
        let mixGain = this.context.createGain();
        let osc3 = this.context.createOscillator();
        let gainOsc3 = this.context.createGain();

        filterGain.gain.setValueAtTime(1, time);
        filterGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

        osc3.type = 'triangle';
        osc3.frequency.value = 100;
        gainOsc3.gain.value = 0;

        gainOsc3.gain.setValueAtTime(0, time);
        gainOsc3.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

        osc3.connect(gainOsc3);
        gainOsc3.connect(mixGain);

        mixGain.gain.value = 1;

        osc3.start(time);
        osc3.stop(time + 0.2);

        let node = this.context.createBufferSource(),
            buffer = this.context.createBuffer(1, 4096, this.context.sampleRate),
            data = buffer.getChannelData(0);


        for (let i = 0; i < 4096; i++) {
            data[i] = Math.random();
        }
        node.buffer = buffer;
        node.loop = true;
        filterGain.connect(mixGain);
        node.start(time);
        node.stop(time + 0.2);

    }
}
