import { Directive, Input,HostListener, ElementRef, EventEmitter, AfterViewInit, Output, OnInit } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-button-pusher]'
})

export class DrumMachineButtonDirective implements AfterViewInit {
    @Output() value = new EventEmitter();
    private angle: number = 0;
    private _valueOut: number;
    private el: HTMLElement;


    private s: any;
    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    @HostListener('click', ['$event']) onClick(e: any) {
        e.preventDefault();
        console.log(e);
    }

    ngAfterViewInit() {
        this.s = Snap(this.el);
    }

    valueOut() {
        this.value.emit({
            value: this._valueOut
        });
    }
}
