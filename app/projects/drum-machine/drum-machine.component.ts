import { Component, OnDestroy } from '@angular/core';
import { DrumMachineMetronomeService } from './drum-machine-metronome.service';
import { SEQUENCER_LINEUP } from './SEQUENCER_LINEUP';
import { DrumMachineKnobDirective } from './directives/drum-machine-knob.directive';
import { DrumMachineButtonDirective } from './directives/drum-machine-button.directive';
import { DrumMachineInstrumentButtonDirective } from './directives/drum-machine-instrumentbutton.directive';
import { DrumMachineInstrumentBeatDirective } from './directives/drum-machine-beat.directive';
import { DrumMachineStartButtonDirective } from './directives/drum-machine-startbutton.directive';
import { DrumMachineKitButtonDirective } from './directives/drum-machine-kit.directive';

@Component({
    directives: [
        DrumMachineKnobDirective,
        DrumMachineButtonDirective,
        DrumMachineInstrumentButtonDirective,
        DrumMachineInstrumentBeatDirective,
        DrumMachineStartButtonDirective,
        DrumMachineKitButtonDirective
    ],
    moduleId: module.id,
    providers: [DrumMachineMetronomeService],
    selector: 'my-drum-machine',
    styles: [require('./../../../scss/projects/drum-machine.scss').toString()],
    templateUrl: 'drum-machine.component.html',
})

export class DrumMachineComponent implements OnDestroy {
    private sequencerLineUp: any = SEQUENCER_LINEUP;
    private currentType: string = 'kick';

    constructor(private metronomeService: DrumMachineMetronomeService) {
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
        this.metronomeService.init();
    }

    start() { this.metronomeService.play(); }
    stop() { this.metronomeService.stop(); }
    update() { this.metronomeService.setSequencerLineUp(this.sequencerLineUp); }
    ngOnDestroy() { this.stop(); }

    togglePlay(e: any) {
        if (e.value === true) {
            this.metronomeService.play();
        } else { this.metronomeService.stop(); }
    }

    instrumentSet(event: any) {
        this.currentType = event.value;
    }

    updateRhythmSettings(event: any, beatNum: number) {
        this.sequencerLineUp['rhythmSettings'][beatNum - 1][this.currentType] = event.value;
        this.update();
    }

    updateInstrumentSettings(event: any, instrument: string, knob: string) {
        this.sequencerLineUp['instrumentSettings'][instrument][knob] = event.value;
        this.update();
    }

    updateProjectSettings(event: any, valueToUpdate: string) {
        this.sequencerLineUp['projectSettings'][valueToUpdate] = event.value;
        this.update();
    }

}
