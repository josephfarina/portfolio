import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Directive({ selector: '[my-stock-chart]' })
export class StocksDirective implements OnInit {
    @Input('ticker') ticker = 'FB';
    @Input('height') _height = 500;
    @Input('width') _width = 500;

    private el: any;
    private graph: any;
    private margin: Margin = {
        top: 30,
        right: 50,
        bottom: 30,
        left: 50
    };
    private height: number = this._height - this.margin.bottom - this.margin.top;
    private width: number = this._width - this.margin.left - this.margin.right;

    constructor(private elementRef: ElementRef) {
        this.el = this.elementRef.nativeElement;
        this.graph = d3.select(this.el)
    }

    ngOnInit() {
        this.createGraph();
    }

    xRange(_x: Date) {
        let x = d3.time.scale().range([0, this.width]);
        return x(_x);
    }

    yRange(_y: number) {
        let y = d3.scale.linear().range([this.height, 0]);
        return y(_y);
    }

    xAxis() {
        return d3.svg.axis().scale(this.xRange).orient('bottom').ticks(5);
    }

    yAxis() {
        return d3.svg.axis().scale(this.yRange).orient('left').ticks(5);
    }

    generateLine(x: number, y: number) {
        return d3.svg.line().x(x).y(y)
    }

    parseDate(date: string) {
        console.log('PARSING DATE')
        let parse = d3.time.format("%d-%b-%y").parse;
        return parse(date);
    }

    createGraph() {
        this.graph
            .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
            .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.getData('https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?api_key=Wrequ5yJz-7tNyvu6iS1')
    }

    getData(file: string) {
        d3.json(file, (error: any, data: StockAPi) => {
            if (error) { throw error; };
            console.log('data received')
            this.handleData(data);
        });
    }

    handleData(data: StockAPi) {
        console.log('handle date')
        // console.log(data);
        let x = this.parseDate('2015-12-12')
        console.log(x)
        // data.dataset.data.forEach( (d) => {
        //     d[DataValue.date] = this.parseDate(d[DataValue.date])
        //     console.log(d)
        // })
    }

}

export interface Margin {
    top: number;
    bottom: number;
    right: number;
    left: number;
}

export interface StockAPi {
  "dataset": {
    "id": number;
    "dataset_code": string;
    "database_code": string;
    "name": string;
    "description": string;
    "refreshed_at": string;
    "newest_available_date": string;
    "oldest_available_date": string;
    "column_names": string[];
    "frequency": string,
    "type": string;
    "premium": boolean;
    "limit": any;
    "transform": any;
    "column_index": any;
    "start_date": string;
    "end_date": string;
    "data": Object[];
    "collapse": any;
    "order": any;
    "database_id": number;
  }
}

export enum DataValue {
    "date" = 0,
    "open" = 1,
    "high" = 2,
    "low" = 3,
    "close" = 4,
    "volume" = 5,
    "ex-Dividend" = 6,
    "split Ratio" = 7,
    "adj. Open" = 8,
    "adj. High" = 9,
    "adj. Low" = 10,
    "adj. Close" = 11,
    "adj. Volume" = 12      
}


