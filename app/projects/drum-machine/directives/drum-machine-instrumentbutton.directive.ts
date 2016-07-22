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
    private s: any;
    private activeIndicator: any;
    private text: any;
    private background: any;

    private colors: Object = { 'active': '#39B54A', 'inactive': '#003B05', 'light-active': 'white', 'light-inactive': 'black', 'background-hover': 'lightgray' };
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
        this.background = this.s.select('rect');
        this.activeIndicator = this.s.select('circle');
        this.text = this.s.selectAll('path');
        this.colors['background'] = this.background.attr('fill');

        this.checkIfSnapInit = true;
        this.check();
        this.s.hover(() => {
            if (this.instrument !== this.currentInstrument) {
                this.background.animate({
                        fill: this.colors['background-hover']
                    }, 100, mina.easein );
                this.s.animate({
                        transform: 't0,1, s.99, .98'
                    }, 100, mina.elastic );
            }
        });

        this.s.mouseout(() => {
            if (this.instrument !== this.currentInstrument) {
                this.background.animate({ fill: this.colors['background'],
                                          transform: '' }, 100,  mina.easein );
                this.s.animate({ transform: '' }, 100, mina.elastic );
            }
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
            this.s.animate({ transform: 't0,1.2, s.98, .97' }, 100, mina.elastic );

            this.activeIndicator.animate({
                    fill: this.colors['active'] },
                    100,
                    mina.easein
                );

            this.text.forEach( (elem: any) => {
                elem.animate({
                    fill: this.colors['light-active']},
                    100,
                    mina.easein
                );
            });
        } else {
            this.activeIndicator.attr({ fill: this.colors['inactive'] });
            this.text.forEach( (elem: any) => { elem.attr({ fill: this.colors['light-inactive']}); });
            this.s.animate({ transform: '' }, 100, mina.elastic );
        }
    }

    valueOut() {
        this.value.emit({
            value: this.instrument
        });
    }
}
