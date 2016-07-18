import { Component, OnInit } from '@angular/core';
import { DrumMachineMetronomeService } from './drum-machine-metronome.service';
import { SEQUENCER_LINEUP } from './sequencerLineUp';
import { DrumMachineKnobDirective } from './directives/drum-machine-knob.directive';
import { DrumMachineButtonDirective } from './directives/drum-machine-button.directive';

@Component({
    moduleId: module.id,
    selector: 'my-drum-machine',
    templateUrl: 'drum-machine.component.html',
    providers: [DrumMachineMetronomeService],
    directives: [
        DrumMachineKnobDirective,
        DrumMachineButtonDirective
    ]
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
    update() { this.metronomeService.setSequencerLineUp(this.sequencerLineUp); }

    ngOnInit() { this.metronomeService.play(); }

    outputValue(event: any, knob: string) {
        // TODO: set this up so it assigns the value of each knob to its rightful value
        console.log(event, knob);
        switch (knob) {
            case 'tempo':
                this.sequencerLineUp['projectSettings']['tempo'] = event.value;
                break;
            case 'volume':
                this.sequencerLineUp['projectSettings']['volume'] = event.value;
                break;
        }
        this.update();
    }
}


