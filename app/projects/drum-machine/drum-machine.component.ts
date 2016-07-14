import { Component } from '@angular/core';
import { DrumMachineMetronomeService } from './drum-machine-metronome.service';

@Component({
    selector: 'my-drum-machine',
    template: `
    <h1>my drum machine</h1>
    <button (click)="start()">start</button>
    <button (click)="stop()">stop</button>
    `,
    providers: [DrumMachineMetronomeService]
})

export class DrumMachineComponent {
    constructor(private metronomeService: DrumMachineMetronomeService) {
        this.metronomeService.init();
    }
    start() {
        this.metronomeService.play();
    }
    stop() {
        this.metronomeService.stop();
    }
}
