import * as d3 from "d3";
import { Hexagon } from "./hexagon";

export interface Data {
    x: number;
    y: number;
  }
export class Layer {
    public SVG;
    public data;
    public path;
    public line;
    public Layer;
    constructor() {
        this.createSVG();
        this.createLayer();
        let shape = new Hexagon();
        this.data = shape.loadData();
        this.generateLine();
        this.generatePath();
        this.enableZoom();
    }

    public createSVG() {
        this.SVG = d3
            .select("body")
            .append("svg")
            .attr("width", 400)
            .attr("height", 300)
            .attr("id", "Hexagon");
    }

    public generateLine() {
        this.line = d3
            .line<Data>()
            .x((d) => d.x)
            .y((d) => d.y)
            .curve(d3.curveLinearClosed);
            // .curve(d3.curveCardinalClosed.tension(0.50));
    }

    public generatePath() {
        this.path = this.Layer
            .append("path")
            .attr("d", this.line(this.data))
            .attr("stroke", "red")
            .attr("stroke-dasharray", "5,5")
            .attr("stroke-width", 3)
            .attr("fill", "rgba(255,0,0,0.4)");
    }

    public createLayer() {
        this.Layer  = this.SVG.append("g");
    }

    public enableZoom() {
        let zoomed = () => {
            this.Layer.attr("transform", d3.event.transform);
        };

        this.SVG.call(d3.zoom()
                .scaleExtent([1 / 2, 12])
                .on("zoom", zoomed)
            );
    }
}
