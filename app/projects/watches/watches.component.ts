import {Component, ElementRef, AfterViewInit} from '@angular/core';
let Snap = require('Snap');

@Component({
    moduleId: module.id,
    selector: 'my-watches',
    inputs: ['text'],
    templateUrl: 'watches.component.html',
    styles: ['svg {width: 30%; margin: 0 auto;}']
})

export class WatchesComponent implements AfterViewInit  {
    private watch: any;
    private face: any;
    private hand: any;
    private angle: number = 0;

    constructor(el: ElementRef) {}
    ngAfterViewInit() {
        this.watch = Snap('#seiko_007');
        this.face = {
            el: this.watch.select('#face'),
            x: this.watch.select('#face').getBBox().cx,
            y: this.watch.select('#face').getBBox().cy
        };
        this.hand = this.watch.select('#minute_hand');
    }

    setHour() {
        let hour = new Date().getHours();
        this.hand.attr({transform: "rotate("+0+" "+this.face.x + " "+this.face.y + ")"});
    }
}
