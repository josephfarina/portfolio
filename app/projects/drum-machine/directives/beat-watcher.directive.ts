import { Directive, ElementRef, EventEmitter, AfterViewInit, Output, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Directive({ selector: '[my-instrument-beat-changer]' })

export class BeatWatcherDirective implements AfterViewInit, OnChanges {
    @Input('beat') beat: number;
    @Input('current-beat') currentBeat: number;
    private el: any;
    private s: any;
    private color: Object = { 'active': '#39B54A', 'inactive': '#003B05' };
    private checkIfSnapInit: boolean = false;
    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    ngOnChanges(changes: SimpleChanges) {
        if (this.checkIfSnapInit) {  this.check(); };
    }

    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.checkIfSnapInit = true;
        this.check();
    }

    check() {
        if (this.beat === this.currentBeat) {
            this.s.attr({ fill: this.color['active'] });
            this.s.animate({ fill: this.color['inactive'] }, 50, mina.linear);
        }
    }
}
