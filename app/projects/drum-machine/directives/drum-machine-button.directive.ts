import { Directive, ElementRef, EventEmitter, AfterViewInit, OnChanges, SimpleChanges, Output, Input } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-button-pusher]'
})

export class DrumMachineButtonDirective implements AfterViewInit, OnChanges {
    @Output() value = new EventEmitter();
    @Input('initial') initIsClicked: boolean;

    private differ: any;
    private el: HTMLElement;
    private isClicked: boolean = false;
    private s: any;
    private activeIndicator: any;
    private activeLight: Object = { active: 'red' };

    private checkIfSnapInit: boolean = false;

    constructor(private _el: ElementRef) {
        this.el = _el.nativeElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        // FIXME: this is a hacky way of making sure that Snap has been initiated -- It cant be called before snap is created
        if (this.checkIfSnapInit) {
            this.isClicked = !this.initIsClicked;
            this.deActivate();
            this.activate();

            console.log('ngOnChanges - initIsClicked = ' + changes['initIsClicked'].currentValue);
        };
    }

    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.activeIndicator = this.s.select('circle');
        this.activeLight['inactive'] = this.activeIndicator.attr('fill');
        this.activate();
        this.checkIfSnapInit = true;

        this.s.hover(() => {
            if (!this.isClicked) {
                this.s.animate({ transform: 't0, -2.5' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
            }
        });

        this.s.mouseout(() => {
            this.deActivate();
        });

        this.s.click(() => {
            this.activate();
            this.deActivate();
            this.isClicked = !this.isClicked;
            this.valueOut();
        });
    }

    activate() {
        if (!this.isClicked) {
            this.s.animate({ transform: 't0, -3.5' }, 200, mina.elastic);
            this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
        }
    }

    deActivate() {
        if (this.isClicked) {
            this.s.animate({ transform: '' }, 200, mina.elastic);
            this.activeIndicator.animate({ fill: this.activeLight['inactive'] }, 200, mina.easeinout);
        }
    }

    valueOut() {
        this.value.emit({
            value: this.isClicked
        });
    }
}
