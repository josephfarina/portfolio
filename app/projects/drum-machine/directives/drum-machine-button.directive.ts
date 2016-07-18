import { Directive, Input, HostListener, ElementRef, EventEmitter, AfterViewInit, Output, OnInit } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-button-pusher]'
})

export class DrumMachineButtonDirective implements AfterViewInit {
    @Output() value = new EventEmitter();
    @Input() isBeat: boolean = false;

    // TODO: make i so the input flashes the flashBeat indicatator and emit the value of the beat selected 

    private _valueOut: number;
    private el: HTMLElement;
    private isClicked: boolean = false;

    private s: any;
    private activeIndicator: any;
    private button: any;
    private beat: any;

    private activeIndication: Object = { active: 'red' };
    private beatIndication: Object = { active: 'yellow' };

    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    @HostListener('click') onClick() { this.flashBeat(); }


    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.activeIndicator = this.s.select('#circle');
        this.button = this.s.select('#button-front');
        this.beat = this.s.select('#beat');

        this.activeIndication['inactive'] = this.activeIndicator.attr('fill');
        this.beatIndication['inactive'] = this.beat.attr('fill');

        this.s.hover(() => {
            if (!this.isClicked) {
                this.s.animate({ fill: 'none' }, 1000, mina.ease);
                this.activeIndicator = this.s.select('circle');
                this.activeIndicator.animate({ fill: this.activeIndication['active'], }, 100, mina.easein);
            }
        });

        this.s.mouseout(() => {
            if (!this.isClicked) {
                this.s.animate({ stroke: '' }, 1000, mina.ease);
                this.activeIndicator.animate({ fill: this.activeIndication['inactive'], }, 100, mina.easeout);
            }
        });

        this.s.click(() => {
            if (!this.isClicked) {
                this.s.animate({ transform: 't0, -4' }, 300, mina.elastic);
                this.activeIndicator.attr({ fill: this.activeIndication['active'] });
            }
            if (this.isClicked) {
                this.s.animate({ transform: '' }, 300, mina.elastic);
            }

            this.isClicked = !this.isClicked;
        });
    }

    valueOut() {
        this.value.emit({
            value: this._valueOut
        });
    }

    flashBeat() {
        this.beat.animate({ fill: this.beatIndication['active'] }, 0,
            () => {this.beat.animate({ fill: this.beatIndication['inactive'] }, 250, mina.easeout);});
    }

}


// let button = Snap('#button');
// let bb = button.select('#button_body')

// let bi = button.select('#button_indicator');

// let isClicked = false;

// button.hover(() => {
//     button.animate({
//         transform: 't0,-5',
//     }, 200, mina.elastic);
// });

// button.mouseout(() => {
//     if (!isClicked) {
//         button.animate({
//             transform: '',
//         }, 300, mina.elastic);
//     }

//     if (isClicked) {
//         button.animate({
//             transform: "t0, -4",
//         }, 300, mina.elastic);
//     }
// });

// button.click(() => {
//     isClicked = !isClicked;
//     button.animate({ transform: "t0, -4" }, 300, mina.elastic);
// });