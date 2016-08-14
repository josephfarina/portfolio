import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';
import { DateVisible } from './stocks.component';
import * as d3 from 'd3';

@Directive({ selector: '[my-stock-chart]' })
export class StocksDirective implements OnInit {
    @Input('ticker') ticker = 'FB';
    @Input('height') _height = 500;
    @Input('width') _width = 500;
    @HostListener('click')
    onClick() { this.updateGraph(this.ticker) }

    private click = 0;
    private el: any;
    private graph: any;
    private line: any;
    private xAxis: any;
    private yAxis: any;
    private dataHighlight: any;
    private dataHighlightContainer: any;
    private dataHighlightValue: any;
    private dataHighlightDetails: any;
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
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.bottom + this.margin.top)
            .append('g')        
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.getData(this.ticker);

    }

    updateGraph(ticker: string) {
        this.getData(ticker, true);
    }

    getData(ticker: string, updateLine: boolean = false) {
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
        });

        this.scaleDomains(data.dataset.data, DataValue.date, DataValue.close);
        this.data = data.dataset.data;

        if (update) {
            this.updateAxis()
            this.updateLine(data.dataset.data)
        }
        else {
            this.createAxis();
            this.createLine(data.dataset.data);
            this.createTooltip(data.dataset.data);
        }
        console.log('data handled');

    }

    scaleDomains(data: any[][], xValue: DataValue, yValue: DataValue, minDate: string = '2014-01-01') {
        if (minDate === 'all') { this.x.domain(d3.extent(data, (d) => { return d[xValue]; }));   }
        else {  this.x.domain([this.parseDate(minDate), d3.max(data, (d) => { return d[xValue]; })]);  }
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
            .attr('dx', this.width / 2)
            .style("z-index", "10")
            .text("$14.54")

        this.dataHighlightDetails = this.graph.append('text')
            .attr('class', 'stock-subtitle')
            .style("position", "absolute")
            .style("text-anchor", "middle")            
            .attr('dy', -30)
            .style("z-index", "10")
            .text("a simple tooltip")
    }

    updateToolTip(arrayData: any) {

    }

    toolTipMouseOver() {
        this.dataHighlight.style('display', null);
    }

    toolTipMouseOut() {
        this.dataHighlight.style('display', 'none');
        this.dataHighlightDetails.text('');
    }

    toolTipMouseMove() {
        let xPos = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);
        
        let index = this.data.map((d: any) => {
            return this.convertDateToString(d[0])
        }).indexOf(this.convertDateToString(xPos))

        this.dataHighlight
            .attr("x1", d3.mouse(d3.event.currentTarget)[0])
            .attr("x2", d3.mouse(d3.event.currentTarget)[0])

        this.dataHighlightDetails
            .attr("x", () => {
                console.log(d3.mouse(d3.event.currentTarget)[0])
                if (d3.mouse(d3.event.currentTarget)[0] <= this.margin.left) { return this.margin.left; } 
                else if (d3.mouse(d3.event.currentTarget)[0] >= (this.width - this.margin.right)) {  return this.width - this.margin.right; } 
                else { return d3.mouse(d3.event.currentTarget)[0]; }
            })
            .text(this.convertDateToString(xPos, '%b %d, %y'))

        this.dataHighlightValue.text(this.data[index][1])
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
 *  - have title update to the highlighted value and when mouse is out have it default to the newest value
 *  - have the subtitle follow the line
 *  - have the highlight line disappear when not hovering
 *  - set up functionality to scale the display to years based on the button click
 *  - create math in the subtilte to show percentage change since the begining value of the scale
 * 
 */