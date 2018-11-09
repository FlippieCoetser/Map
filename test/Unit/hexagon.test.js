"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
const bootstrap_test_1 = require("./bootstrap.test");
const enums_1 = require("../../src/enums");
// ***************************************************************************
// * Hexagon
// ***************************************************************************
const hexagon_1 = require("../../src/hexagon");
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Hexagon", () => {
    it("Then a property vertices should exist", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.vertices).to.not.undefined;
    });
    it("Then a property vertices should eql 6", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.vertices).is.eql(6);
    });
    it("Then a property innerAngle should exist", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.innerAngle).to.not.undefined;
    });
    it("Then a property innerAngle should eql 60", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.innerAngle).is.eql(60);
    });
    it("Then a property orientation should exist", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.orientation).to.not.undefined;
    });
    it("Then a property innerRadius should exist", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.innerRadius).to.not.undefined;
    });
    it("Then a property outerRadius should exist", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.outerRadius).to.not.undefined;
    });
    it("Then a property size should exist", () => {
        bootstrap_test_1.expect(hexagon_1.Hexagon.size).to.not.undefined;
    });
    describe("When orientation set to Orientation.Flat", () => {
        before(() => {
            hexagon_1.Hexagon.orientation = enums_1.Orientation.Flat;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.orientation).is.eql(enums_1.Orientation.Flat);
        });
        it("Then property size.width should eql outerRadius * 2", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.size.width).is.eql(hexagon_1.Hexagon.outerRadius * 2);
        });
        it("Then property size.height should eql innerRadius * 2", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.size.height).is.eql(hexagon_1.Hexagon.innerRadius * 2);
        });
    });
    describe("When orientation set to Orientation.Sharp", () => {
        before(() => {
            hexagon_1.Hexagon.orientation = enums_1.Orientation.Sharp;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.orientation).is.eql(enums_1.Orientation.Sharp);
        });
        it("Then property size.width should eql innerRadius * 2", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.size.width).is.eql(hexagon_1.Hexagon.innerRadius * 2);
        });
        it("Then property size.height should eql outerRadius * 2", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.size.height).is.eql(hexagon_1.Hexagon.outerRadius * 2);
        });
    });
    describe("When innerRadius set to 50", () => {
        before(() => {
            hexagon_1.Hexagon.innerRadius = 50;
        });
        it("Then property innerRadius should eql 50", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.innerRadius).is.eql(50);
        });
        it("Then property outerRadius shold eql innerRadius * Math.sqrt(2)", () => {
            bootstrap_test_1.expect(hexagon_1.Hexagon.outerRadius).is.eql(hexagon_1.Hexagon.innerRadius * 2 / Math.sqrt(3));
        });
    });
});
//# sourceMappingURL=hexagon.test.js.map