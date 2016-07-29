/**
 * TODO:
 *  change the SVG to the new vertically aligning knobs
 */

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
    templateUrl: 'drum-machine.component.html',
})

export class DrumMachineComponent implements OnDestroy {
    private sequencerLineUp: Object = SEQUENCER_LINEUP;
    private instruments: string[] = ['kick', 'snare', 'lowtom', 'midtom', 'hitom', 'rimshot', 'clap', 'hihat', 'cymbal'];
    private currentType: string = 'kick';

    constructor(private metronomeService: DrumMachineMetronomeService) {
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
        this.metronomeService.init();
    }

    ngOnDestroy() { this.stop(); }
    start() { this.metronomeService.play(); }
    stop() { this.metronomeService.stop(); }

    togglePlay(e: any) {
        if (e.value === true) {
            this.metronomeService.play();
        } else {
            this.metronomeService.stop();
        }
    }

    update() { this.metronomeService.setSequencerLineUp(this.sequencerLineUp); }

    instrumentKnob(event: any, type: string, knob: string) {
        this.sequencerLineUp['instrumentSettings'][type][knob] = event.value;
        this.update();
    }

    instrumentSet(event: any) {
        this.currentType = event.value;
    }

    kitSet(event: any) {
        this.sequencerLineUp['projectSettings']['kit'] = event.value;
        this.update();
    }

    tempoValue(event: any) {
        this.sequencerLineUp['projectSettings']['tempo'] = event.value;
        this.update();
    }

    accentValue(event: any) {
        this.sequencerLineUp['projectSettings']['accent'] = event.value;
        this.update();
    }

    volumeValue(event: any) {
        this.sequencerLineUp['projectSettings']['volume'] = event.value;
        this.update();
    }

    beatOutputValue(event: any, beatNum: number) {
        this.sequencerLineUp['rhythmSettings'][beatNum - 1][this.currentType] = event.value;
    }
}
