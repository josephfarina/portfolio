import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';
import * as d3 from 'd3';

@Directive({ selector: '[my-stock-chart]' })
export class StocksDirective implements OnInit {
    @Input('ticker') ticker = 'FB';
    @Input('height') _height = 500;
    @Input('width') _width = 500;
    @HostListener('click')
    onClick() {
        var ticks = ['GOOG', 'FB', 'DELL', 'AAPL']
        this.updateGraph(ticks[this.click])
        if(this.click === ticks.length) {
            this.click = 0;
        }
        this.click++;
    }

    private click = 0;
    private el: any;
    private graph: any;
    private line: any;
    private margin: Margin = {
        top: 30,
        right: 50,
        bottom: 30,
        left: 50
    };
    private height: number = this._height - this.margin.bottom - this.margin.top;
    private width: number = this._width - this.margin.left - this.margin.right;

    private x = d3.time.scale().range([0, this.width]);
    private y = d3.scale.linear().range([this.height, 0]);

    constructor(private elementRef: ElementRef) {
        this.el = this.elementRef.nativeElement;
        this.graph = d3.select(this.el)
    }

    ngOnInit() {
        this.createGraph();
    }

    parseDate(date: string, format: string = '%Y-%m-%d') {
        return d3.time.format(format).parse(date);
    }

    createGraph() {
        this.graph = this.graph
                    .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                    .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        this.getData('FB');
    }

    updateGraph(ticker: string) {
        this.getData(ticker, true);
    }

    getData(ticker: string, updateLine: boolean = false) {
        console.log('getData')
        d3.json('https://www.quandl.com/api/v3/datasets/WIKI/' + ticker + '.json?api_key=Wrequ5yJz-7tNyvu6iS1', (error: any, data: StockAPi) => {
            if (error) { console.error('error'); throw error; };
            console.log('data received')
            this.handleData(data, updateLine);
        });
    }

    handleData(data: StockAPi, updateLine: boolean = false) {
        console.log('handle date')
        data.dataset.data.map((d) => {
            d[DataValue.date] = this.parseDate(d[DataValue.date])
            for (let i = 1; i < d.length; i++) { d[i] = +d[i]; }
        })
        this.scaleDomains(data.dataset.data, DataValue.date, DataValue.close);
        if (updateLine) { this.updateLine(data.dataset.data) }
        else { this.createLine( data.dataset.data); }
        console.log('data handled');
    }

    scaleDomains(data: any[][], xValue: DataValue, yValue: DataValue) {
        this.x.domain(d3.extent(data, (d) => { return d[xValue]; }));
        this.y.domain([0, d3.max(data, (d) => { return d[yValue]; })]);
    }

    createLine(data: any) {
        this.line = this.graph.append('g')
            .append("path")
            .attr("class", "line")
            .attr("d", this.generateLine(data, DataValue.date, DataValue.close));
    }

    updateLine(data: any) {
        this.line
            .transition()
            .duration(1000)
            .attr("d", this.generateLine(data, DataValue.date, DataValue.close));        
    }

    generateLine(data: any, xValue: DataValue, yValue: DataValue) {
        console.log('generate')
        let line = d3.svg.line()
            .x( (d) => { return this.x(d[xValue]); })
            .y( (d => { return this.y(d[yValue]); }));
        
        return line(data);
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
        "data": any[][];
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
    "exDividend" = 6,
    "splitRatio" = 7,
    "adjOpen" = 8,
    "adjHigh" = 9,
    "adjLow" = 10,
    "adjClose" = 11,
    "adjVolume" = 12
}


