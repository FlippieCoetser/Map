import * as d3 from "d3";

export interface Options {
    element: string;
    hight: number;
    width: number;
}

interface Circle {
    x: number;
    y: number;
    r: number;
    color?: string;
}
export class Example {
    private SVG;
    private Layer;
    private Colors: d3.ScaleOrdinal<string, string>;
    private Circles: Circle[];

    constructor(public options: Options) {
        this.createSVG(options);
        this.createLayer();
        this.enableZoom();
    }

    public createSVG(options: Options) {
        this.SVG = d3
            .select(this.options.element)
            .attr("height", this.options.hight)
            .attr("width", this.options.width);
    }

    public createColors() {
        this.Colors = d3.scaleOrdinal(d3.schemeCategory10);
    }

    public createLayer() {
        this.Layer  = this.SVG.append("g");
        this.drawLayer();
    }

    public drawLayer() {
        this.createColors();
        this.createCircles();
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

    public getCircleData() {
        this.Circles = d3.range(0, 100).map((index) => {
            return {
                "x": this.random(this.options.width),
                "y": this.random(this.options.hight),
                "r": (Math.random() * 90) + 10,
                "color": this.Colors(index.toString()),
            };
        });
    }


    public createCircles() {
        this.getCircleData();
        this.Layer
            .selectAll("circle")
            .data(this.Circles)
            .enter()
            .append("circle")
            .attr("cx", (data) => data.x )
            .attr("cy", (data) => data.y )
            .attr("r", (data) => data.r )
            .attr("fill", (data) => data.color )
            .attr("fill-opacity", 0.5);
    }

    public random(max: number): number {
        return (Math.random() * max);
    }
}
