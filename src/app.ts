import Event from "./events";
import * as D3 from "d3";

let button = document.getElementById("trigger");
let label = document.getElementById("label");
let trigger = new Event();

let action = (message) => {
  label.innerHTML = message;
};

trigger.on("Trigger", action);

button.onclick = () => trigger.emit("Trigger", "message");

const square = D3.selectAll("journey-map");
square.style("fill", "orange");


class Map extends HTMLElement {
  constructor() {
    super();
  }

}

window.customElements.define("journey-map", Map);
