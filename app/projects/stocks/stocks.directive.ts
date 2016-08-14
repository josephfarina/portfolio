import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';
import * as d3 from 'd3';

@Directive({ selector: '[my-stock-chart]' })
export class StocksDirective implements OnInit {
    @Input('ticker') ticker: string = 'FB';
    @Input('time') time: string = '5Y';
    @Input('height') _height: number = 500;
    @Input('width') _width: number = 500;
    @HostListener('click')
    onClick() {
        this.updateGraph(this.ticker, this.time)
    }

    private click = 0;
    private el: any;
    private graph: any;
    private line: any;
    private xAxis: any;
    private yAxis: any;
    private dataHighlight: any;
    private dataHighlightContainer: any;
    private dataHighlightValue: any;
    private dataHighlightInfo: any;
    private dataHighlightDateDetails: any;
    private data: any[];
    private margin: Margin = {
        top: 150,
        bottom: 50,
        right: 50,
        left: 50
    };
    private height: number = this._height - this.margin.top - this.margin.bottom;
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
                .attr('class', 'chart')
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.bottom + this.margin.top)
            .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.getData(this.ticker);
    }

    updateGraph(ticker: string, time: string) {
        this.getData(ticker, time, true);
    }

    getData(ticker: string, date: string = '5Y', updateLine: boolean = false) {
        console.log(this.makeUrl(ticker, date));
        let url = this.makeUrl(ticker, date)

        d3.json(url, (error: any, data: StockAPi) => {
            if (error) { console.error('error'); throw error; };
            console.log('data received')
            this.handleData(data, updateLine);
        });
    }

    makeUrl(ticker: string, date: string) {
        let url = 'https://www.quandl.com/api/v3/datasets/WIKI/';
        let d = new Date();
        let dateOutput: string;

        switch (date) {
            case '5Y':
                dateOutput = this.convertDateToString(new Date(d.setDate(d.getDate() - (365 * 5))))
                break;
            case '1Y':
                dateOutput = this.convertDateToString(new Date(d.setDate(d.getDate() - 365)))
                break;
            case '6M':
                dateOutput = this.convertDateToString(new Date(d.setDate(d.getDate() - 182)))
                break;
            case '1M':
                dateOutput = this.convertDateToString(new Date(d.setDate(d.getDate() - 33)))
                break;
            case '1W':
                dateOutput = this.convertDateToString(new Date(d.setDate(d.getDate() - 9)))
                break;
        }

        return url + ticker + '.json?&start_date=' + dateOutput + '&api_key=Wrequ5yJz-7tNyvu6iS1'
    }

    handleData(data: StockAPi, update: boolean = false) {
        console.log('handle date')
        data.dataset.data.map((d) => {
            d[DataValue.date] = this.parseDate(d[DataValue.date])
            for (let i = 1; i < d.length; i++) { d[i] = +d[i]; }
        });

        this.scaleDomains(data.dataset.data, DataValue.date, DataValue.close);
        this.data = data.dataset.data;

        if (update) {
            this.updateAxis()
            this.updateLine(data.dataset.data)
            this.updateToolTip();
        }

        else {
            this.createAxis();
            this.createLine(data.dataset.data);
            this.createTooltip(data.dataset.data);
        }
        console.log('data handled');
    }

    scaleDomains(data: any[][], xValue: DataValue, yValue: DataValue) {
        this.x.domain(d3.extent(data, (d) => { return d[xValue]; }));
        this.y.domain(d3.extent(data, (d) => { return d[yValue]; }));
    }

    createLine(data: any) {
        this.line = this.graph.append('g')
            .append("path")
            .attr("class", "line")
            .style('stroke', this.checkIfPositive())
            .attr("d", this.generateLine(data, DataValue.date, DataValue.close));
    }

    updateLine(data: any) {
        this.line
            .transition()
            .style('stroke', this.checkIfPositive())
            .attr("d", this.generateLine(data, DataValue.date, DataValue.close));
    }

    generateLine(data: any, xValue: DataValue, yValue: DataValue) {
        console.log('generate')
        let line = d3.svg.line()
            .x((d) => { return this.x(d[xValue]); })
            .y((d => { return this.y(d[yValue]); }));

        return line(data);
    }

    createAxis() {
        this.yAxis = d3.svg.axis().scale(this.y).orient("left").ticks(3);
        this.graph.append('g')
            .attr("class", "y axis")
            .call(this.yAxis);
    }

    updateAxis() {
        this.graph.select('.y.axis')
            .transition()
            .call(this.yAxis)
    }

    createTooltip(arrayData: any) {
        this.dataHighlight = this.graph.append('g')
            .append('line')
            .attr('class', 'tooltip-line')
            .attr("y1", 0)
            .attr('y2', this.height)
            .attr("x1", 10)
            .attr("x2", 10)
            .style('stroke', this.checkIfPositive())

        this.dataHighlightContainer = this.graph.append("rect")
            .attr("width", this.width)
            .attr("height", this.height)
            .style("fill", "none")
            .style("pointer-events", "all")
            .on("mouseover", () => { this.toolTipMouseOver() })
            .on("mouseout", () => { this.toolTipMouseOut() })
            .on("mousemove", () => this.toolTipMouseMove())

        this.dataHighlightValue = this.graph.append('text')
            .attr('class', 'stock-title')
            .style("position", "absolute")
            .attr('dy', -70)
            .style("text-anchor", "middle")
            .style('fill', this.checkIfPositive())
            .attr('dx', this.width / 2)
            .style("z-index", "10")
            .text('$' + this.data[0][DataValue.close])

        this.dataHighlightInfo = this.graph.append('text')
            .attr('class', 'stock-subtitle')
            .style("position", "absolute")
            .style("text-anchor", "middle")
            .attr('dy', -47)
            .attr('dx', this.width / 2)
            .style("z-index", "10")
            .text(() => {
                return this.calculateValueDiff(this.data[0][DataValue.close]) + ' ' + this.calculatePercentageDiff(this.data[0][DataValue.close]) + ' ' + this.time;
            });

        this.dataHighlightDateDetails = this.graph.append('text')
            .attr('class', 'stock-dateinfo')
            .style("position", "absolute")
            .style("text-anchor", "middle")
            .attr('dy', -30)
            .style("z-index", "10")
    }

    dataHighlightInfoText() {
        return this.calculateValueDiff(this.data[0][DataValue.close]) + ' ' + this.calculatePercentageDiff(this.data[0][DataValue.close])
    }

    toolTipMouseOver() {
        this.dataHighlightValue.style('fill', this.checkIfPositive());
        this.dataHighlight.style('display', null);
    }

    toolTipMouseOut() {
        this.dataHighlight.style('display', 'none');
        this.dataHighlightDateDetails.text('');
        this.dataHighlightInfo.text(() => {
            return this.calculateValueDiff(this.data[0][DataValue.close]) + ' ' + this.calculatePercentageDiff(this.data[0][DataValue.close]) + ' ' + this.time;
        });
        this.dataHighlightValue.text(this.data[0][DataValue.close])
    }

    toolTipMouseMove() {
        let xPos = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);

        let index = this.data.map((d: any) => {
            return this.convertDateToString(d[0])
        }).indexOf(this.convertDateToString(xPos))

        this.dataHighlight
            .attr("x1", d3.mouse(d3.event.currentTarget)[0])
            .attr("x2", d3.mouse(d3.event.currentTarget)[0])

        this.dataHighlightDateDetails
            .attr("x", () => {
                console.log(d3.mouse(d3.event.currentTarget)[0])
                if (d3.mouse(d3.event.currentTarget)[0] <= this.margin.left) { return this.margin.left; }
                else if (d3.mouse(d3.event.currentTarget)[0] >= (this.width - this.margin.right)) { return this.width - this.margin.right; }
                else { return d3.mouse(d3.event.currentTarget)[0]; }
            })
            .text(this.convertDateToString(xPos, '%b %d, %y'))

        this.dataHighlightValue
            .text(this.data[index][1])

        this.dataHighlightInfo
            .text(() => {
                return this.calculateValueDiff(this.data[index][DataValue.close]) + ' ' + this.calculatePercentageDiff(this.data[index][DataValue.close]) + ' ' + this.time;
            });
    }

    updateToolTip() {
        this.dataHighlightValue.style('fill', this.checkIfPositive());
        this.dataHighlightInfo.text(() => {
            return this.calculateValueDiff(this.data[0][DataValue.close]) + ' ' + this.calculatePercentageDiff(this.data[0][DataValue.close]) + ' ' + this.time;
        });
        this.dataHighlight
            .style('stroke', this.checkIfPositive())
    }

    checkIfPositive(): string {
        if (this.data[0][DataValue.close] > this.data[this.data.length - 1][DataValue.close]) {
            return 'green';
        } else {
            return '#F23568';
        }
    }

    calculatePercentageDiff(currValue: number) {
        return '(' + (currValue / this.data[this.data.length - 1][DataValue.close] * 100).toFixed(2) + '%' + ')';
    }

    calculateValueDiff(currValue: number) {
        return (currValue - this.data[this.data.length - 1][DataValue.close]).toFixed(2)
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


/**
 * 
 * TODO:
 *  - have the subtitle follow the line
 *  - have the highlight line disappear when not hovering
 * 
 */