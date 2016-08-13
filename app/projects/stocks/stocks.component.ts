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
    private dateVisible: DateVisible = DateVisible.All;
    private ticker: string = 'FB';

    updateDate(date: DateVisible) {
        this.dateVisible = date;
    }

}

export enum DateVisible {
    All = 1,
    fiveYears,
    threeYears,
    twoYears,
    oneYear,
    sixMonths,
    oneMonth,
    twoWeeks,
    oneWeek,
    OneDay,
}