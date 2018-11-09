import * as d3 from "d3";
import { Options, Shape} from "./shape";
import { Coordinate } from "./interfaces";
// tslint:disable-next-line:no-unused-variable
import { Hexagon } from "./hexagon";

export class Layer {
    public SVG;
    public data;
    public path;
    public line;
    public Layer;
    public Columns;
    public Rows;
    public Width;
    public Hight;
    public Grid;
    public Dots;
    constructor() {
        this.configure();
        this.createSVG();
        this.createLayer();
        let options: Options = {
            center: {
                x: 150,
                y: 150,
            },
            size: 50,
        };
        let Shape: Shape = new Hexagon(options);
        this.data = Shape.path;
        this.generateLine();
        this.generatePath();
        this.enableZoom();
    }

    public configure() {
        this.Width = 850;
        this.Hight = 350;
    }

    public createSVG() {
        this.SVG = d3
            .select("body")
            .append("svg")
            .attr("width", this.Width)
            .attr("height", this.Hight)
            .attr("id", "Hexagon");
    }

    public generateLine() {
        this.line = d3
            .line<Coordinate>()
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
            // .attr("stroke-dasharray", "5,5")
            // .attr("stroke-width", 3)
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

export interface Data {
    x: number;
    y: number;
    width: number;
    height: number;
    click: number;
}
