import { Directive, ElementRef, EventEmitter, AfterViewInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-instrument-button-pusher]'
})

export class DrumMachineInstrumentButtonDirective implements AfterViewInit, OnChanges {
    @Output() value = new EventEmitter();
    @Input('type') instrument: string = 'default';
    @Input('current') currentInstrument: string = '';

    private el: HTMLElement;
    private isClicked: boolean = false;

    private s: any;
    private kick: any;

    private activeIndicator: any;
    private activeLight: Object = { active: 'red' };
    // private instruments: string[] = ['kick', 'snare', 'lowtom', 'midtom', 'hitom', 'rimshot', 'clap', 'hihat', 'cymbal'];
    private colors: Object = { 'active': 'blue', 'inactive': 'orange' };

    private checkIfSnapInit: boolean = false;
    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }


    ngOnChanges(changes: SimpleChanges) {
        // FIXME: this is a hacky way of making sure that Snap has been initiated -- It cant be called before snap is created
        if (this.checkIfSnapInit) {
            console.log('cFDFDh', this.currentInstrument);
            this.check();
        };
    }

    ngAfterViewInit() {
        console.log(this.instrument);
        this.s = Snap(this.el);
        this.activeIndicator = this.s.select('circle');
        this.checkIfSnapInit = true;
        this.check();
        this.s.hover(() => {
            // if (!this.isClicked) {
            //     this.s.animate({ transform: 't0, -2.5' }, 200, mina.elastic);
            //     this.activeIndicator.animate({ fill: '#FF4856'}, 200, mina.easeinout);
            // }
        });

        this.s.mouseout(() => {
            // if (!this.isClicked) {
            //     this.s.animate({ transform: '' }, 200, mina.elastic);
            //     this.activeIndicator.animate({ fill: this.activeLight['inactive']}, 200, mina.easeinout);
            // }
        });

        this.s.click(() => {
            this.valueOut();
            this.check();
        });
    }

    check() {
        console.log('ch', this.currentInstrument);
        console.log('ti', this.instrument, 'ci', this.currentInstrument);
        if (this.instrument === this.currentInstrument) {
            this.activeIndicator.attr({ fill: this.colors['active'] });
        } else {
            this.activeIndicator.attr({ fill: this.colors['inactive'] });
        }
    }

    valueOut() {
        this.value.emit({
            value: this.instrument
        });
    }
}
