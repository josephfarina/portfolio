import { Component, OnInit } from '@angular/core';
import { DrumMachineMetronomeService } from './drum-machine-metronome.service';
import { SEQUENCER_LINEUP } from './sequencerLineUp';

@Component({
    moduleId: module.id,
    selector: 'my-drum-machine',
    templateUrl: 'drum-machine.component.html',
    providers: [DrumMachineMetronomeService]
})

export class DrumMachineComponent implements OnInit {
    private sequencerLineUp: Object = SEQUENCER_LINEUP;
    private instruments: string[] = ['kick', 'snare', 'lowtom', 'midtom', 'hitom', 'rimshot', 'clap', 'hihat', 'cymbal'];
    private currentType: string = 'kick';

    constructor(private metronomeService: DrumMachineMetronomeService) {
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
        this.metronomeService.init();
    }
    start() { this.metronomeService.play(); }
    stop() { this.metronomeService.stop(); }
    update() {
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
        console.log(this.sequencerLineUp); }

    ngOnInit() { this.metronomeService.play(); }


}


