import { Map } from "./component";
window.customElements.define("journey-map", Map);

import * as d3 from "d3";
import { Grid, Options } from "./grid";
import { Shapes, Orientation } from "./enums";


let SVG = d3
.select("axiom-flow")
.append("svg")
.attr("width", 1857)
.attr("height", 857);

let layer = SVG
.append("g")
.attr("class", "layer");

let options: Options = {
    layer: layer,
    size: {
        fullscreen: false,
        width: 1857,
        height: 857,
    },
    tile: {
        type: Shapes.Hexagon,
        orientation: Orientation.Sharp,
        radius: 50,
    },
};
// tslint:disable-next-line:no-unused-variable
let grid = new Grid(options);
