import { Directive, Input, ElementRef, EventEmitter, AfterViewInit, Output } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-knob-turner]'
})

export class DrumMachineKnobDirective implements AfterViewInit {
    @Output() value = new EventEmitter();
    private angle: number = 0;
    private el: HTMLElement;
    private minAngle: number = -130;
    private maxAngle: number = 130;
    private cx: number;
    private cy: number;

    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    ngAfterViewInit() {
        let s = Snap(this.el);
        let circ = s.select('circle');

        circ.drag((dx: number, dy: number) => {
            if (this.angle > this.maxAngle) { return; }
            if (this.angle < this.minAngle) { return; }
            this.cx = circ.attr('cx');
            this.cy = circ.attr('cy');
            this.angle += dx / 10;
            this.valueOut();
            s.transform('r' + [this.angle, this.cx, this.cy]);
        }, () => { this.resetMaxandMin(); });
    }

    calculateValue(): number {
        let valueOut = (this.angle - this.minAngle) / (this.maxAngle - this.minAngle);
        if (valueOut > 1) { valueOut = 1; }
        if (valueOut < 0) { valueOut = 0; }
        return valueOut;
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
