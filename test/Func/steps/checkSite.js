"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_decorators_1 = require("cucumber.decorators");
var check_1 = require("../helpers/check");
var CheckSite = (function () {
    function CheckSite() {
    }
    CheckSite.prototype.title = function (falseCase, expectedTitle) {
        return check_1.default.Title(falseCase, expectedTitle);
    };
    ;
    __decorate([
        cucumber_decorators_1.when(/^I expect that the title is( not)* "([^"]*)?"$/)
    ], CheckSite.prototype, "title", null);
    CheckSite = __decorate([
        cucumber_decorators_1.cucumber
    ], CheckSite);
    return CheckSite;
}());
;
var checkSite = new CheckSite();
