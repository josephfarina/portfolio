import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Directive({ selector: '[my-stock-chart]' })
export class StocksDirective implements OnInit {
    @Input('ticker') ticker = 'FB';
    @Input('height') _height = 500;
    @Input('width') _width = 500;

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
        this.graph
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        this.getData('https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?api_key=Wrequ5yJz-7tNyvu6iS1')
    }

    getData(file: string) {
        console.log('getData')
        d3.json(file, (error: any, data: StockAPi) => {
            if (error) { throw error; };
            console.log('data received')
            this.handleData(data);
        });
    }

    handleData(data: StockAPi) {
        console.log('handle date')
        data.dataset.data.forEach((d) => {
            d[DataValue.date] = this.parseDate(d[DataValue.date])
            for (let i = 1; i < d.length; i++) { d[i] = +d[i]; }
        })
        console.log('data handled');
    }

    generateLine(data: any[][], xValue: DataValue, yValue: DataValue) {
        return d3.svg.line()
            .x((data) => {
                return data[xValue];
            })
            .y((data) => {
                return data[yValue];
            })
    }

    scaleDomains(data: any[][], xValue: DataValue, yValue: DataValue) {
        this.x.domain(d3.extent(data, (d) => {
            return d[xValue];
        }));
        this.y.domain([0, d3.max(data, (d) => {
            return d[yValue];
        })]);
    }

    createLine(data: any) {
        this.graph.append('g')
            .append("path")
            .attr("class", "line")
            .attr("d", this.generateLine(data, DataValue.date, DataValue.close));
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


