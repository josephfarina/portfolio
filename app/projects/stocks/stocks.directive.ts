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

    constructor(private elementRef:ElementRef) {
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

    createGraph() {
        this.graph
            .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
            .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

}

export interface Margin {
    top: number;
    bottom: number;
    right: number;
    left: number;
}