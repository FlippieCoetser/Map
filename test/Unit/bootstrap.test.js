"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
exports.expect = chai_1.expect;
const chai = require("chai");
exports.chai = chai;
const sinon = require("sinon");
exports.sinon = sinon;
const sinonChai = require("sinon-chai");
exports.sinonChai = sinonChai;
const jsdom_1 = require("jsdom");
chai.use(sinonChai);
before(() => {
    let window = (new jsdom_1.JSDOM(`<axiom-flow></axiom-flow>`, { runScripts: "dangerously" })).window;
    Object.defineProperty(window.HTMLHtmlElement.prototype, "clientWidth", { value: 1920 });
    Object.defineProperty(window.HTMLHtmlElement.prototype, "clientHeight", { value: 943 });
    global.document = window.document;
});
//# sourceMappingURL=bootstrap.test.js.map