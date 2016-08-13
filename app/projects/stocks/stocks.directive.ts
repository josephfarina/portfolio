import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';
import { DateVisible } from './stocks.component';
import * as d3 from 'd3';

@Directive({ selector: '[my-stock-chart]' })
export class StocksDirective implements OnInit {
    @Input('ticker') ticker = 'FB';
    @Input('date-visible') dateVisible: DateVisible;
    @Input('height') _height = 500;
    @Input('width') _width = 500;
    @HostListener('click')
    onClick() {
        this.updateGraph(this.ticker)
        console.log(this.dateVisible)
    }

    private click = 0;
    private el: any;
    private graph: any;
    private line: any;
    private xAxis: any;
    private yAxis: any;
    private margin: Margin = {
        top: 30,
        right: 50,
        bottom: 130,
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

    convertDateToString(date: Date, format: string = '%Y-%m-%d') {
        return d3.time.format(format)(date);
    }

    createGraph() {
        this.graph = this.graph
                    .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                    .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        this.getData(this.ticker);
    }

    updateGraph(ticker: string) {
        this.getData(ticker, true);
    }

    getData(ticker: string, updateLine: boolean = false) {
        console.log('getData')
        let currentDate: any = new Date();
        let outputDate: string;
        switch (this.dateVisible) {
            case DateVisible.fiveYears:
                currentDate = currentDate.setDate(currentDate.getDate() - (365 * 5) );
                break;
            case DateVisible.threeYears:
                currentDate = currentDate.setDate(currentDate.getDate() - (365 * 3) );
                break;
            case DateVisible.oneYear:
                currentDate = currentDate.setDate(currentDate.getDate() - (365) );
                break;
            case DateVisible.sixMonths:
                currentDate = currentDate.setDate(currentDate.getDate() - (182) );
                break;
            case DateVisible.oneMonth:
                currentDate = currentDate.setDate(currentDate.getDate() - (30) );
                break;
            case DateVisible.twoWeeks:
                currentDate = currentDate.setDate(currentDate.getDate() - (14) );
                break;
            case DateVisible.oneWeek:
                currentDate = currentDate.setDate(currentDate.getDate() - (7) );
                break;
            case DateVisible.OneDay:
                currentDate = currentDate.setDate(currentDate.getDate() - (1) );
                break;
        }

        if (this.dateVisible === DateVisible.All) { outputDate = ''} 
        else {
            outputDate = this.convertDateToString(currentDate)
        }

        d3.json('https://www.quandl.com/api/v3/datasets/WIKI/' + ticker + '.json?&start_date=2014-01-01&api_key=Wrequ5yJz-7tNyvu6iS1', (error: any, data: StockAPi) => {
            if (error) { console.error('error'); throw error; };
            console.log('data received')
            this.handleData(data, updateLine);
        });
    }

    handleData(data: StockAPi, update: boolean = false) {
        console.log('handle date')
        data.dataset.data.map((d) => {
            d[DataValue.date] = this.parseDate(d[DataValue.date])
            for (let i = 1; i < d.length; i++) { d[i] = +d[i]; }
        })
        this.scaleDomains(data.dataset.data, DataValue.date, DataValue.close);

        if (update) { 
            this.updateAxis()
            this.updateLine(data.dataset.data) 
        }
        else { 
            this.createAxis();
            this.createLine(data.dataset.data); 
        }
        console.log('data handled');
    }

    scaleDomains(data: any[][], xValue: DataValue, yValue: DataValue, minDate: string = '2014-01-01') {
        
        if ( minDate === 'all') { this.x.domain(d3.extent(data, (d) => { return d[xValue]; }));
        } else {  this.x.domain([this.parseDate(minDate), d3.max(data, (d) => { return d[xValue]; })]); }
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

    createAxis() {
        this.xAxis = d3.svg.axis().scale(this.x).orient("top").ticks(5);
        this.graph.append('g')
            .attr("class", "x axis")
            // .attr("transform", "translate(0," + this.height + ")")
            .call(this.xAxis);
        
        this.yAxis = d3.svg.axis().scale(this.y).orient("left").ticks(5);
        this.graph.append('g')
            .attr("class", "y axis")
            // .attr("transform", "translate(0," + this.height + ")")
            .call(this.yAxis);        
    }

    updateAxis() {
        this.graph.select('.x.axis')
            .transition()
            .call(this.xAxis)
        this.graph.select('.y.axis')
            .transition()
            .duration(1000)
            .call(this.yAxis)            
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


