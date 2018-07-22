import Event from "./events";
import { Example, Options } from "./example";
import { Chart } from "./chart";
import { Layer } from "./layer";

class Map extends HTMLElement {
  public button: HTMLElement;
  public label: HTMLElement;
  public event: Event;
  constructor() {
    super();
    this.createButton("trigger");
    this.createLabel("label");

    this.event = new Event();
    this.event.on("Trigger", this.action);
  }

  private action = (message) => { this.label.innerHTML = message; };
  private trigger = () => this.event.emit("Trigger", "message");

  private createButton(id: string) {
    this.button = document.createElement("button");
    this.button.setAttribute("id", id);
    this.button.innerHTML = "Trigger";
    this.button.onclick = this.trigger;
    this.appendChild(this.button);
  }

  private createLabel(id: string) {
    this.label = document.createElement("label");
    this.label.setAttribute("id", id);
    this.appendChild(this.label);
  }
}

window.customElements.define("journey-map", Map);

// tslint:disable-next-line:no-unused-variable
let layer = new Layer();