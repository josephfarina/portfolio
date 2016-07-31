import { Directive, ElementRef, EventEmitter, AfterViewInit, OnChanges, SimpleChanges, Output, Input } from '@angular/core';

@Directive({ selector: '[my-button-pusher]' })

export class BeatSelectorDirective implements AfterViewInit, OnChanges {
    @Output() value = new EventEmitter();
    @Input('initial') isActivated: boolean = false;
    private el: any;
    private s: any;
    private activeIndicator: any;
    private activeLight: Object = { active: 'red' };
    private checkIfSnapInit: boolean = false;
    constructor(private _el: ElementRef) {
        this.el = _el.nativeElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.checkIfSnapInit) { this.check(); };
    }

    ngAfterViewInit() {
        this.s = Snap(this.el);
        this.activeIndicator = this.s.select('circle');
        this.activeLight['inactive'] = this.activeIndicator.attr('fill');
        this.init();
        this.checkIfSnapInit = true;
        this.s.hover( (e: any) => {
            if (this.isActivated) {
                this.s.animate({ transform: 't0, -2.5' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
            }
        });

        this.s.mouseout( (e: any) => {
            if (this.isActivated) {
                this.s.animate({ transform: '' }, 200, mina.elastic);
                this.activeIndicator.animate({ fill: this.activeLight['inactive'] }, 200, mina.easeinout);
            }
        });

        this.s.click( (e: any) => {
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
        this.value.emit({ value: !this.isActivated });
    }
}
