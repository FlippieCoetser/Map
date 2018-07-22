import * as d3 from "d3";

export interface Data {
    x: number;
    y: number;
  }
export class Chart {
    public SVG;
    public data;
    public path;
    public line;
    constructor() {
        this.createSVG();
        this.loadData();
        this.generateLine();
        this.generatePath();
    }

    public createSVG() {
        this.SVG = d3
            .select("body")
            .append("svg")
            .attr("id", "drawing");
    }

    public loadData() {
        this.data = [
            {"x": 1, "y": 3},
            {"x": 2, "y": 5},
            {"x": 3, "y": 3.7},
            {"x": 4, "y": 4.5},
            {"x": 5, "y": 3.9},
        ];
    }

    public generateLine() {
        this.line = d3
            .line<Data>()
            .x((d) => this.scaleX(d.x))
            .y((d) => this.scaleY(d.y));
    }

    public generatePath() {
        this.path = this.SVG
            .append("path")
            .attr("d", this.line(this.data))
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("fill", "none");
    }

    public scaleX = (x: number) => d3.scaleLinear().domain([0, 6]).range([0, 960])(x)
    public scaleY = (y: number) => d3.scaleLinear().domain([0, 6]).range([400, 0])(y)
}


