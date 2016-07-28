import { Component, OnDestroy } from '@angular/core';
import { DrumMachineMetronomeService } from './drum-machine-metronome.service';
import { SEQUENCER_LINEUP } from './sequencerLineUp';
import { DrumMachineKnobDirective } from './directives/drum-machine-knob.directive';
import { DrumMachineButtonDirective } from './directives/drum-machine-button.directive';
import { DrumMachineInstrumentButtonDirective } from './directives/drum-machine-instrumentbutton.directive';
import { DrumMachineInstrumentBeatDirective } from './directives/drum-machine-beat.directive';
import { DrumMachineStartButtonDirective } from './directives/drum-machine-startbutton.directive';
import { DrumMachineKitButtonDirective } from './directives/drum-machine-kit.directive';

// TODO: maybe change the global knobs so they all veritcally align

@Component({
    moduleId: module.id,
    selector: 'my-drum-machine',
    templateUrl: 'drum-machine.component.html',
    providers: [DrumMachineMetronomeService],
    directives: [
        DrumMachineKnobDirective,
        DrumMachineButtonDirective,
        DrumMachineInstrumentButtonDirective,
        DrumMachineInstrumentBeatDirective,
        DrumMachineStartButtonDirective,
        DrumMachineKitButtonDirective
    ]
})

export class DrumMachineComponent implements OnDestroy {
    private sequencerLineUp: Object = SEQUENCER_LINEUP;
    private instruments: string[] = ['kick', 'snare', 'lowtom', 'midtom', 'hitom', 'rimshot', 'clap', 'hihat', 'cymbal'];
    private currentType: string = 'kick';

    constructor(private metronomeService: DrumMachineMetronomeService) {
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
        this.metronomeService.init();
    }

    ngOnDestroy() {
        this.stop();
    }

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
        // console.log(event.value, type, knob);
        this.update();
    }

    instrumentSet(event: any) {
        this.currentType = event.value;
    }

    kitSet(event: any) {
        // console.log(event);
        this.sequencerLineUp['projectSettings']['kit'] = event.value;
        this.update();
    }

    tempoValue(event: any) {
        // console.log(event.value);
        // let tempo = (event.value * 120) + 60;
        // tempo / 2 is only because the beat is in double time
        this.sequencerLineUp['projectSettings']['tempo'] = event.value;
        this.update();
    }

    accentValue(event: any) {
        this.sequencerLineUp['projectSettings']['accent'] = event.value;
        this.update();
    }

    volumeValue(event: any) {
        // console.log(event.value)
        this.sequencerLineUp['projectSettings']['volume'] = event.value;
        this.update();
        // console.log(this.sequencerLineUp);
    }

    reverbValue(event: any) {
        // console.log(event);
    }

    beatOutputValue(event: any, beatNum: number) {
        // console.log(event.value, beatNum);
        // beatnum - 1 is changing the rythm 1-16 into a 0-15 array
        this.sequencerLineUp['rhythmSettings'][beatNum - 1][this.currentType] = event.value;
    }

    outputValue(event: any, knob: string) {
        // TODO: set this up so it assigns the value of each knob to its rightful value
        // console.log(event, knob);
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


