import { Directive, Input,HostListener, ElementRef, EventEmitter, AfterViewInit, Output, OnInit } from '@angular/core';
import { DrumMachineMetronomeService } from './../drum-machine-metronome.service';
let Snap = require( 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js');

@Directive({
    selector: '[my-knob-turner]'
})

export class DrumMachineKnobDirective implements AfterViewInit {
    @Output() value = new EventEmitter();
    @Input('starting') startingAngle: number;
    private angle: number = 0;
    private el: HTMLElement;
    private minAngle: number = -130;
    private maxAngle: number = 130;
    private cx: number;
    private cy: number;

    private s: any;
    private circ: any;
    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    @HostListener('mousewheel', ['$event']) onClick(e: any) {
        e.preventDefault();
        this.rotate(e.deltaY);
    }

    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.circ = this.s.select('circle');

        this.rotate(this.calculateInitialAngleFromValue(), true);

        this.circ.drag((dx: number, dy: number) => {
            this.rotate(dx);
        }, () => { this.resetMaxandMin(); });
    }

    rotate(dx: number, init?: boolean) {
        if (this.angle > 0 && this.angle > this.maxAngle) { this.angle = this.maxAngle - 1; }
        if (this.angle < 0 && this.angle < this.minAngle) { this.angle = this.minAngle + 1; }
        if (this.angle > this.maxAngle) { return; }
        if (this.angle < this.minAngle) { return; }
        this.cx = this.circ.attr('cx');
        this.cy = this.circ.attr('cy');
        this.angle += dx / 10;
        if (init !== true) {
            this.valueOut();
        }
        this.s.transform('r' + [this.angle, this.cx, this.cy]);
    }

    calculateValue(): number {
        let valueOut = (this.angle - this.minAngle) / (this.maxAngle - this.minAngle);
        if (valueOut > 1) { valueOut = 1; }
        if (valueOut < 0) { valueOut = 0; }
        return valueOut;
    }

    calculateInitialAngleFromValue() {
        let angle = this.startingAngle * (this.maxAngle - this.minAngle) + this.minAngle;
        return angle * 10;
    }

    valueOut() {
        this.value.emit({
            value: this.calculateValue()
        });
    }

    resetMaxandMin() {
        if (this.angle > 0 && this.angle > this.maxAngle) { this.angle = this.maxAngle - 1; }
        if (this.angle < 0 && this.angle < this.minAngle) { this.angle = this.minAngle + 1; }
    }
}
