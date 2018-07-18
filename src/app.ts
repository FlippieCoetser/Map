import Event from "./events";
import * as d3 from "d3";
import { Example, Options } from "./example";

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

let options: Options = {
  element: "#test",
  hight: 600,
  width: 960,
};

// tslint:disable-next-line:no-unused-variable
let example = new Example(options);
