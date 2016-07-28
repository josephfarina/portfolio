import { Directive, ElementRef, EventEmitter, AfterViewInit, OnChanges, SimpleChanges, Output, Input } from '@angular/core';
let Snap = require( 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js');

@Directive({ selector: '[my-button-pusher]' })

export class DrumMachineButtonDirective implements AfterViewInit, OnChanges {
    @Output() value = new EventEmitter();
    @Input('initial') isActivated: boolean = false;

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
            console.log('ch', this.isActivated);
            this.check();
        };
    }

    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.activeIndicator = this.s.select('circle');
        this.activeLight['inactive'] = this.activeIndicator.attr('fill');
        this.init();
        this.checkIfSnapInit = true;

        this.s.hover(() => {
            if (this.isActivated) {
                this.s.animate({ transform: 't0, -2.5' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
            }
        });

        this.s.mouseout(() => {
            if (this.isActivated) {
                this.s.animate({ transform: '' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: this.activeLight['inactive'] }, 200, mina.easeinout);
            }
        });

        this.s.click(() => {
            this.check();
            this.valueOut();
        });
    }

    init() {
        if (this.isActivated) {
            this.s.animate({ transform: 't0, -3.5' }, 200, mina.elastic);
            this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
        }
        this.isActivated = !this.isActivated;
    }

    check() {
        if (this.isActivated) {
            this.s.animate({ transform: 't0, -3.5' }, 200, mina.elastic);
            this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
        }
        if (!this.isActivated) {
            this.s.animate({ transform: '' }, 200, mina.elastic);
            this.activeIndicator.animate({ fill: this.activeLight['inactive'] }, 200, mina.easeinout);
        }
        this.isActivated = !this.isActivated;
    }

    valueOut() {
        this.value.emit({
            value: !this.isActivated
        });
    }
}
