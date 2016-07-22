import { Directive, ElementRef, EventEmitter, AfterViewInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-instrument-beat-changer]'
})

export class DrumMachineInstrumentBeatDirective implements AfterViewInit, OnChanges {
    @Input('beat') beat: number;
    @Input('current-beat') currentBeat: number;

    private el: HTMLElement;
    private s: any;

    private color: Object = {'active': 'red', 'inactive': 'gray'};
    private checkIfSnapInit: boolean = false;

    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    ngOnChanges(changes: SimpleChanges) {
        console.log(this.currentBeat)
        // FIXME: this is a hacky way of making sure that Snap has been initiated -- It cant be called before snap is created
        if (this.checkIfSnapInit) {
            this.check();
        };
    }

    ngAfterViewInit() {
        console.log(this.beat, this.currentBeat)
        this.s = Snap(this.el);
        this.checkIfSnapInit = true;
        this.check();
    }

    check() {
        console.log('ti', this.beat, 'ci', this.currentBeat);
        if (this.beat === this.currentBeat) {
            this.s.animate({ fill: this.color['active'] }, 0, mina.easeout,
            () => {this.s.animate({fill: this.color['inactive']}, 200, mina.easeout);
        });
        }
    }
}
