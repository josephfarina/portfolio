import { Component, OnInit } from '@angular/core';
import { DrumMachineMetronomeService } from './drum-machine-metronome.service';
import { SEQUENCER_LINEUP } from './sequencerLineUp';

@Component({
    selector: 'my-drum-machine',
    template: `
    <h1>my drum machine</h1>
    <button (click)="start()">start</button>
    <button (click)="stop()">stop</button>
    `,
    providers: [DrumMachineMetronomeService]
})

export class DrumMachineComponent implements OnInit {
    private sequencerLineUp: Object = SEQUENCER_LINEUP;

    constructor(private metronomeService: DrumMachineMetronomeService) {
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
        this.metronomeService.init();
    }
    start() { this.metronomeService.play(); }
    stop() { this.metronomeService.stop(); }

    ngOnInit() {
        console.log(this.sequencerLineUp[0]);
        this.metronomeService.play();
    }

}
