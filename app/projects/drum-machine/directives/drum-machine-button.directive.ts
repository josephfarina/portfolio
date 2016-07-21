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

    private activeLight: Object = { active: 'red' };
    private beatIndication: Object = { active: 'yellow' };

    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    // @HostListener('click') onClick() { this.flashBeat(); }


    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.activeIndicator = this.s.select('circle');


        // this.button = this.s.selectAll();

        this.activeLight['inactive'] = this.activeIndicator.attr('fill');

        // this.s.hover(() => {
            // if (!this.isClicked) {

                // this.s.animate({ transform: 't0, -3' }, 200, mina.elastic);
                // this.activeIndicator = this.s.select('circle');
                // this.activeIndicator.animate({ fill: this.activeIndication['active'], }, 100, this.s.mina.easein);
            // }
        // });

        // this.button.mouseout(() => {
        //     if (!this.isClicked) {
        //         this.button.animate({ stroke: '' }, 1000, this.s.mina.ease);
        //         this.activeIndicator.animate({ fill: this.activeIndication['inactive'], }, 100, this.s.mina.easeout);
        //     }
        // });

        this.s.click(() => {
            if (!this.isClicked) { 
                this.s.animate({ transform: 't0, -3' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: 'orange'}, 200, mina.easeinout);
            }
            if (this.isClicked) { 
                this.s.animate({ transform: '' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: 'blue'}, 200, mina.easeinout);
            }
            this.isClicked = !this.isClicked;
        });
    }

    valueOut() {
        this.value.emit({
            value: this._valueOut
        });
    }

    // flashBeat() {
    //     this.beat.animate({ fill: this.beatIndication['active'] }, 0,
    //         () => {this.beat.animate({ fill: this.beatIndication['inactive'] }, 250, this.s.mina.easeout); });
    // }

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