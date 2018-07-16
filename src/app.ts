import Event from "./events";
import * as d3 from "d3";

let button = document.getElementById("trigger");
let label = document.getElementById("label");
let trigger = new Event();

let action = (message) => {
  label.innerHTML = message;
};

trigger.on("Trigger", action);

button.onclick = () => trigger.emit("Trigger", "message");

const square = d3.selectAll("journey-map");
square.style("fill", "orange");


class Map extends HTMLElement {
  constructor() {
    super();
  }

}

window.customElements.define("journey-map", Map);

let w = 960;
let h = 500;

let data = d3.range(0, 100).map(function(d){
  // tslint:disable-next-line:no-bitwise
  return {"x": ~~(Math.random() * w ), "y": ~~(Math.random() * h), "r": ~~(Math.random() * 90) + 10 };
});

let svg = d3.select("#test")
  .attr("width", w)
  .attr("height", h);

let zoomLayer  = svg.append("g");

let color = d3.scaleOrdinal(d3.schemeCategory10);

zoomLayer.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function(d){ return d.x; })
  .attr("cy", function(d){ return d.y; })
  .attr("r", function(d){ return d.r; })
  .attr("fill", function(d, i){
    console.log(i);
    return color(i.toString()); })
  .attr("fill-opacity", 0.5);

let zoomed = function() {
  zoomLayer.attr("transform", d3.event.transform);
};

svg.call(d3.zoom()
          .scaleExtent([1 / 2, 12])
          .on("zoom", zoomed)
    );
