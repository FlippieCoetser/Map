"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_decorators_1 = require("cucumber.decorators");
var action_1 = require("../helpers/action");
var check_1 = require("../helpers/check");
var Trigger = (function () {
    function Trigger() {
    }
    Trigger.prototype.openWebsite = function (type, page) {
        return action_1.default.Open(type, page);
    };
    ;
    Trigger.prototype.noMessage = function () {
        return check_1.default.noMessage();
    };
    Trigger.prototype.clickButton = function () {
        return action_1.default.ClickButton();
    };
    Trigger.prototype.correctLabel = function () {
        return check_1.default.correctLabel();
    };
    __decorate([
        cucumber_decorators_1.given(/^I open the (url|site) "([^"]*)?"$/)
    ], Trigger.prototype, "openWebsite", null);
    __decorate([
        cucumber_decorators_1.given(/^a label with id "label" to be empty$/)
    ], Trigger.prototype, "noMessage", null);
    __decorate([
        cucumber_decorators_1.when(/^I click on a button with id "trigger"$/)
    ], Trigger.prototype, "clickButton", null);
    __decorate([
        cucumber_decorators_1.then(/^I expect a label with id "label" to be "message"$/)
    ], Trigger.prototype, "correctLabel", null);
    Trigger = __decorate([
        cucumber_decorators_1.cucumber
    ], Trigger);
    return Trigger;
}());
;
var trigger = new Trigger();
