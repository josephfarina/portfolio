import { Component } from '@angular/core';
import { DrumMachineService } from './drum-machine.service';
@Component({
    selector: 'my-drum-machine',
    template: `
    <h1>my drum machine</h1>
    <button (click)="start()">start</button>
    <button (click)="stop()">stop</button>
    `,
    providers: [DrumMachineService]
})

export class DrumMachineComponent {
    constructor(private drumMachineService: DrumMachineService) {}
    start() {
        this.drumMachineService.handlePlay();
    }
    stop() {
        this.drumMachineService.handleStop();
    }
}
