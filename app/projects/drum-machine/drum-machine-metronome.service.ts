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
        if (this.sequencerLineUp['rhythmSettings'][beat]['kick']) { this.kick(time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['snare']) { this.snare(time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['lowtom']) { this.lowtom(time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['midtom']) { this.midtom(time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['hitom']) { this.hitom(time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['rimshot']) { this.rimshot(time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['clap']) { this.clap(time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['hihat']) { this.hihat(time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['cymbal']) { this.cymbal(time); }

    }

    kick(time: any) {
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
    }

    snare(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    lowtom(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    midtom(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    hitom(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    rimshot(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    clap(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(550, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    hihat(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(750, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    cymbal(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }
}
