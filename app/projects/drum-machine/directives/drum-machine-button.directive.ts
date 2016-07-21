import { Directive, ElementRef, EventEmitter, AfterViewInit, Output } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-button-pusher]'
})

export class DrumMachineButtonDirective implements AfterViewInit {
    @Output() value = new EventEmitter();
    private el: HTMLElement;
    private isClicked: boolean = false;
    private s: any;
    private activeIndicator: any;
    private activeLight: Object = { active: 'red' };

    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.activeIndicator = this.s.select('circle');
        this.activeLight['inactive'] = this.activeIndicator.attr('fill');

        this.s.hover(() => {
            if (!this.isClicked) {
                this.s.animate({ transform: 't0, -2.5' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: '#FF4856'}, 200, mina.easeinout);
            }
        });

        this.s.mouseout(() => {
            if (!this.isClicked) {
                this.s.animate({ transform: '' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: this.activeLight['inactive']}, 200, mina.easeinout);
            }
        });

        this.s.click(() => {
            if (!this.isClicked) { 
                this.s.animate({ transform: 't0, -3.5' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: '#FF4856'}, 200, mina.easeinout);
            }
            if (this.isClicked) { 
                this.s.animate({ transform: '' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: this.activeLight['inactive']}, 200, mina.easeinout);
            }
            this.isClicked = !this.isClicked;
            this.valueOut();
        });
    }

    valueOut() {
        this.value.emit({
            value: this.isClicked
        });
    }
}
