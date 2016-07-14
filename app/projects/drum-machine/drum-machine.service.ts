import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DrumMachineService implements OnInit {
    private context: any;

    private noteTime: number;
    private startTime: number;
    private lastDrawTime: number = -1;
    private LOOP_LENGTH: number = 16;
    private rhythmIndex: number = 0;
    private timeoutId: number;
    private testBuffer: number = null;

    private tempo: number = 120;
    private TEMPO_MAX: number = 200;
    private TEMPO_MIN: number = 40;
    private TEMPO_STEP: number = 4;

    if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext')) {
    window.webkitAudioContext = AudioContext;
    }

    ngOnInit() { this.audioInit(); }

    audioInit() { this.context = new webkitAudioContext(); }
    playSynth(index: number) { console.log('note number: ' + index); }

    schedule() {
    let currentTime = this.context.currentTime;
    currentTime -= this.startTime;
    while (this.noteTime < currentTime + 0.200) {
        let contextPlayTime = this.noteTime + this.startTime;
        // play the buffer and advance
        this.playSynth(this.rhythmIndex);
        this.advanceNote();
    }
    this.timeoutId = setTimeout('schedule()', 0);
    }

    advanceNote() {
        // Advance time by a 16th note...
        let secondsPerBeat = 60.0 / this.tempo;
        this.rhythmIndex++;
        if (this.rhythmIndex === this.LOOP_LENGTH) { this.rhythmIndex = 0; }
        // 0.25 because each square is a 16th note
        this.noteTime += 0.25 * secondsPerBeat;
    }

    handlePlay() {
        this.rhythmIndex = 0;
        this.noteTime = 0.0;
        this.startTime = this.context.currentTime + 0.005;
        this.schedule();
    }

    handleStop() { clearTimeout(this.timeoutId); }

}
