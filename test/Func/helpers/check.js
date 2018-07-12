"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Check = (function () {
    function Check() {
    }
    Check.correctLabel = function () {
        var label = browser.getText("#label");
        chai_1.expect(label).to.eql("message");
    };
    Check.noMessage = function () {
        var label = browser.getText("#label");
        chai_1.expect(label).to.eql("");
    };
    return Check;
}());
exports.default = Check;
