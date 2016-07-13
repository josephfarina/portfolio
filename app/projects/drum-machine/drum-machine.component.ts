import {Component} from '@angular/core';
import { DrumMachineService } from './drum-machine.service';
@Component({
    selector: 'my-drum-machine',
    template: ''
})

export class DrumMachineComponent {
    constructor(private drumMachineService: DrumMachineService) {}
}
