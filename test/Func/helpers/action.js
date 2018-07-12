"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = (function () {
    function Action() {
    }
    Action.ClickButton = function () {
        browser.click("#trigger");
    };
    Action.Open = function (type, page) {
        var url = (type === "url") ? page : browser.options.baseUrl + page;
        browser.url(url);
    };
    ;
    return Action;
}());
exports.default = Action;
