import { Directive, ElementRef, EventEmitter, AfterViewInit, Output } from '@angular/core';
let Snap = require('Snap');

@Directive({
    selector: '[my-instrument-button-pusher]'
})

export class DrumMachineInstrumentButtonDirective implements AfterViewInit {
    @Output() value = new EventEmitter();
    private el: HTMLElement;
    private isClicked: boolean = false;

    private s: any;
    private kick: any;

    private activeIndicator: any;
    private activeLight: Object = { active: 'red' };

    constructor(private _el: ElementRef) { this.el = _el.nativeElement; }

    ngAfterViewInit() {

        /*
        for this loop create a an object that contains each elements selector value ' 
        this.kick = this.s.select*g#kick -- do this for all of them
        
        then make an input that takes the components current instrument type
        create a loop that runs everytime one of the buttons is clicked
            it checks to see if the click is equal to the button pressed 
                if it is it updates it and animates it
                    it emits the new value
                if it is not then it puts it back to default values 
        */

        this.s = Snap(this.el);
        this.kick = this.s.select('g#kick');
        this.activeIndicator = this.kick.select('circle');
        this.activeIndicator.attr({ fill : 'red'})

        // this.activeIndicator = this.s.select('circle');
        // this.activeLight['inactive'] = this.activeIndicator.attr('fill');

        this.s.hover(() => {
            // if (!this.isClicked) {
            //     this.s.animate({ transform: 't0, -2.5' }, 200, mina.elastic);
            //     this.activeIndicator.animate({ fill: '#FF4856'}, 200, mina.easeinout);
            // }
        });

        this.s.mouseout(() => {
            // if (!this.isClicked) {
            //     this.s.animate({ transform: '' }, 200, mina.elastic);
            //     this.activeIndicator.animate({ fill: this.activeLight['inactive']}, 200, mina.easeinout);
            // }
        });

        this.s.click(() => {
            // if (!this.isClicked) { 
            //     this.s.animate({ transform: 't0, -3.5' }, 200, mina.elastic);
            //     this.activeIndicator.animate({ fill: '#FF4856'}, 200, mina.easeinout);
            // }
            // if (this.isClicked) { 
            //     this.s.animate({ transform: '' }, 200, mina.elastic);
            //     this.activeIndicator.animate({ fill: this.activeLight['inactive']}, 200, mina.easeinout);
            // }
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
