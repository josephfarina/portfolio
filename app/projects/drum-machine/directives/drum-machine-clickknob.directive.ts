import { Directive, Input, HostListener, ElementRef, EventEmitter, AfterViewInit, Output, OnInit } from '@angular/core';

let Snap = require('Snap');

@Directive({
    selector: '[my-clickknob-turner]'
})

// TODO NEED TO SLOW DOWN THIS WHELL SO THE KNOB CAN BE TURNED EVENLY
// SET UP THE SWITHC TO OUTPUT AN ENUM OF MULTIPLE DIFFERENT TYPES OF REVERB
// SET UP SERVICE TO CHANGE THE REVERB DEPENDING ON THE SETTING
// FIND MULTIPLE DIFFERENT IMPULSES TO LOAD

export class DrumMachineClickKnobDirective implements AfterViewInit {
    @Output() value = new EventEmitter();
    @Input('starting') startingAngle: number;
    private angle: number = 0;
    private el: HTMLElement;
    private minAngle: number = -135;
    private maxAngle: number = 135;
    private cx: number;
    private cy: number;

    private s: any;
    private circ: any;
    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    @HostListener('wheel', ['$event']) onWheel(e: any) {
        e.preventDefault();
        let rotate = false;
        if (e.deltaY === 0) {
            console.log('euqls =0')
            rotate = true;
            console.log('r', rotate);
        }

        console.log(e.deltaY, rotate)
        if (e.deltaY < 0 || e.deltaY > 0 && rotate) {
           this.rotate(e.deltaY);
            console.log('> -0 &&  rotate')
            rotate = false;
        }
    }

    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.circ = this.s.select('circle');

        this.rotate(this.calculateInitialAngleFromValue(), true);

        this.circ.drag((dx: number, dy: number) => {

        });
    }

    rotateLeft() {
        this.angle -= 45;
        this.s.transform('r' + [this.angle, this.cx, this.cy]);
    }

    rotateRight() {
        this.angle += 45;
        this.s.transform('r' + [this.angle + 45, this.cx, this.cy]);
    }

    rotate(dx: number, init?: boolean) {
        if (this.angle > 360) { this.angle -= 360; }
        if (this.angle < 0) { this.angle += 360; }
        this.cx = this.circ.attr('cx');
        this.cy = this.circ.attr('cy');

        if (dx > 0) { this.angle += 45; }
        if (dx < 0) { this.angle -= 45; }
        if (init !== true) { this.valueOut(); }
        this.s.transform('r' + [this.angle, this.cx, this.cy]);
    }

    calculateValue(): number {
        let valueOut: number;
        switch (this.angle) {
            case 180:
                valueOut = 0;
                break;
            case 225:
                valueOut = 1;
                break;
            case 270:
                valueOut = 2;
                break;
            case 270:
                valueOut = 2;
                break;
        }
        // let valueOut = (this.angle - this.minAngle) / (this.maxAngle - this.minAngle);
        // if (valueOut > 1) { valueOut = 1; }
        // if (valueOut < 0) { valueOut = 0; }
        /*
        left 
        -130
         -92
         -47
         0

         add 45 if scrolled to right
         subtract 45 if scrolled to left

         */
        return this.angle;
    }

    calculateInitialAngleFromValue() {
        let angle = this.startingAngle * (this.maxAngle - this.minAngle) + this.minAngle;
        console.log(angle);
        return angle * 10;
    }

    valueOut() {
        this.value.emit({
            value: this.calculateValue()
        });
    }
}
