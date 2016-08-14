import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { StocksDirective } from './stocks.directive';

@Component({
    directives: [ROUTER_DIRECTIVES, StocksDirective],
    moduleId: module.id,
    selector: 'my-stocks',
    styles: [require('./../../../scss/projects/stocks.scss').toString()],
    templateUrl: './stocks.component.html',
    encapsulation: ViewEncapsulation.None
})

export class StocksComponent {
    private time: string = '5Y'
    private ticker: string = 'FB';

    updateDate(_time: string) {
        this.time = _time;
    }
}
