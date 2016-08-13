import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { StocksDirective } from './stocks.directive';

@Component({
    directives: [ROUTER_DIRECTIVES, StocksDirective],
    moduleId: module.id,
    selector: 'my-stocks',
    styles: [require('./../../../scss/projects/stocks.scss').toString()],
    templateUrl: './stocks.component.html',
})

export class StocksComponent {}
