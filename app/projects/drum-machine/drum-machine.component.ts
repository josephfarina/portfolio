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
    private _tempo: number = 120;

    private kick_0: boolean = false;
    private kick_1: boolean = false;
    private kick_2: boolean = false;
    private kick_3: boolean = false;
    private kick_4: boolean = false;
    private kick_5: boolean = false;
    private kick_6: boolean = false;
    private kick_7: boolean = false;
    private kick_8: boolean = false;
    private kick_9: boolean = false;
    private kick_10: boolean = false;
    private kick_11: boolean = false;
    private kick_12: boolean = false;
    private kick_13: boolean = false;
    private kick_14: boolean = false;
    private kick_15: boolean = false;

    constructor(private metronomeService: DrumMachineMetronomeService) {
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
        this.metronomeService.init();
    }
    start() { this.metronomeService.play(); }
    stop() { this.metronomeService.stop(); }

    ngOnInit() {
        console.log(this.sequencerLineUp[0]);
       this.metronomeService.play();
        this.changeTempo();
    }

    changeTempo() {
        this.sequencerLineUp['projectSettings']['tempo'] = this._tempo;
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
    }

    updateKick() {
        this.sequencerLineUp['rhythmSettings']['0']['kick'] = this.kick_0;
        this.sequencerLineUp['rhythmSettings']['1']['kick'] = this.kick_1;
        this.sequencerLineUp['rhythmSettings']['2']['kick'] = this.kick_2;
        this.sequencerLineUp['rhythmSettings']['3']['kick'] = this.kick_3;
        this.sequencerLineUp['rhythmSettings']['4']['kick'] = this.kick_4;
        this.sequencerLineUp['rhythmSettings']['5']['kick'] = this.kick_5;
        this.sequencerLineUp['rhythmSettings']['6']['kick'] = this.kick_6;
        this.sequencerLineUp['rhythmSettings']['7']['kick'] = this.kick_7;
        this.sequencerLineUp['rhythmSettings']['8']['kick'] = this.kick_8;
        this.sequencerLineUp['rhythmSettings']['9']['kick'] = this.kick_9;
        this.sequencerLineUp['rhythmSettings']['10']['kick'] = this.kick_10;
        this.sequencerLineUp['rhythmSettings']['11']['kick'] = this.kick_11;
        this.sequencerLineUp['rhythmSettings']['12']['kick'] = this.kick_12;
        this.sequencerLineUp['rhythmSettings']['13']['kick'] = this.kick_13;
        this.sequencerLineUp['rhythmSettings']['14']['kick'] = this.kick_14;
        this.sequencerLineUp['rhythmSettings']['15']['kick'] = this.kick_15;
        this.metronomeService.setSequencerLineUp(this.sequencerLineUp);
    }

}
