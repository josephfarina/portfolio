import { Injectable } from '@angular/core';

@Injectable()
export class DrumMachineMetronomeService {

    private timeWorker: any = null;
    private noteTime: number;
    private startTime: number;
    private currentTime: number;
    private rhythmIndex: number = 0;
    private tempo: number = 120;
    private nextNoteTime: number = 0;
    private lookahead: number = 25.0;
    private scheduleAheadTime: number = .2;
    private noteLength: number = .05;
    private context: any;

    init() {
        console.log('initated');
        this.context = new AudioContext();
        this.timeWorker = new Worker('./app/projects/drum-machine/timeWorker.js');
        // ./app/projects/drum-machine/timeWorker.js
        console.log(this.timeWorker);
        this.timeWorker.onmessage = (e: any) => {
            if (e.data === 'tick') {
                console.log('tick!');
                this.schedule();
            }
        };
        this.timeWorker.postMessage({ 'interval': this.lookahead });
    }

    play() {
        this.noteTime = 0;
        this.rhythmIndex = 0;
        this.nextNoteTime = 0;
        this.startTime = this.context.currentTime;
        this.timeWorker.postMessage('start');
    }

    stop() {
        this.timeWorker.postMessage('stop');
    }

    schedule() {
        this.currentTime = this.context.currentTime - this.startTime;
        while (this.nextNoteTime < this.context.currentTime + this.scheduleAheadTime) {
            this.setBeat(this.nextNoteTime);
            this.nextNote();
        }
    }

    nextNote() {
        let secondsPerBeat = 60 / this.tempo;
        this.nextNoteTime += .25 * secondsPerBeat;
        this.rhythmIndex++;
        if (this.rhythmIndex === 16) { this.rhythmIndex = 0; }
    }

    setBeat(time: number) {
        let osc = this.context.createOscillator();
        osc.connect(this.context.destination);
        let freq = 400;
        if (this.rhythmIndex % 8 === 0) { freq = 500; }
        if (this.rhythmIndex % 16 === 0) { freq = 1000; }
        osc.frequency.value = freq;
        osc.start(time);
        osc.stop(time + this.noteLength);
    }
}
