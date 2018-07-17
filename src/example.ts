import * as d3 from "d3";
export class Example {
    private width: number;
    private hight: number;
    private SVG;
    private ZoomLayer;

    constructor() {
        this.width = 960;
        this.hight = 500;

        this.SVG = d3.select("#test")
        .attr("width", this.width)
        .attr("height", this.hight);

        this.ZoomLayer  = this.SVG.append("g");

        let color = d3.scaleOrdinal(d3.schemeCategory10);

        this.ZoomLayer.selectAll("circle")
        .data(this.getData())
        .enter()
        .append("circle")
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .attr("r", function(d){ return d.r; })
        .attr("fill", function(d, i){
            return color(i.toString());
        })
        .attr("fill-opacity", 0.5);

        let zoomed = () => {
            this.ZoomLayer.attr("transform", d3.event.transform);
        };

        this.SVG.call(d3.zoom()
                .scaleExtent([1 / 2, 12])
                .on("zoom", zoomed)
            );
    }
    public getData() {
        return d3.range(0, 100).map((d) => {
            // tslint:disable-next-line:no-bitwise
            return {"x": ~~(Math.random() * this.width ), "y": ~~(Math.random() * this.hight), "r": ~~(Math.random() * 90) + 10 };
        });
    }
}
