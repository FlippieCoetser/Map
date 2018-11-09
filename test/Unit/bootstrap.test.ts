import { expect } from "chai";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { JSDOM } from "jsdom";
chai.use(sinonChai);



declare var global: any;
before( () => {
  let window = (new JSDOM(`<axiom-flow></axiom-flow>`, { runScripts: "dangerously"})).window;
  Object.defineProperty(window.HTMLHtmlElement.prototype, "clientWidth", {value: 1920});
  Object.defineProperty(window.HTMLHtmlElement.prototype, "clientHeight", {value: 943});
  global.document = window.document;
});

export { expect, chai, sinon, sinonChai};
