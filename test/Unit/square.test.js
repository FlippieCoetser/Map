"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
const bootstrap_test_1 = require("./bootstrap.test");
const enums_1 = require("../../src/enums");
// ***************************************************************************
// * Square
// ***************************************************************************
const square_1 = require("../../src/square");
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Square", () => {
    it("Then a property vertices should exist", () => {
        bootstrap_test_1.expect(square_1.Square.vertices).to.not.undefined;
    });
    it("Then a property vertices should eql 4", () => {
        bootstrap_test_1.expect(square_1.Square.vertices).is.eql(4);
    });
    it("Then a property innerAngle should exist", () => {
        bootstrap_test_1.expect(square_1.Square.innerAngle).to.not.undefined;
    });
    it("Then a property innerAngle should eql 90", () => {
        bootstrap_test_1.expect(square_1.Square.innerAngle).is.eql(90);
    });
    it("Then a property orientation should exist", () => {
        bootstrap_test_1.expect(square_1.Square.orientation).to.not.undefined;
    });
    it("Then a property innerRadius should exist", () => {
        bootstrap_test_1.expect(square_1.Square.innerRadius).to.not.undefined;
    });
    it("Then a property outerRadius should exist", () => {
        bootstrap_test_1.expect(square_1.Square.outerRadius).to.not.undefined;
    });
    it("Then a property size should exist", () => {
        bootstrap_test_1.expect(square_1.Square.size).to.not.undefined;
    });
    describe("When orientation set to Orientation.Flat", () => {
        before(() => {
            square_1.Square.orientation = enums_1.Orientation.Flat;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            bootstrap_test_1.expect(square_1.Square.orientation).is.eql(enums_1.Orientation.Flat);
        });
        it("Then property size.width should eql innerRadius * 2", () => {
            bootstrap_test_1.expect(square_1.Square.size.width).is.eql(square_1.Square.innerRadius * 2);
        });
        it("Then property size.height should eql innerRadius * 2", () => {
            bootstrap_test_1.expect(square_1.Square.size.height).is.eql(square_1.Square.innerRadius * 2);
        });
    });
    describe("When orientation set to Orientation.Sharp", () => {
        before(() => {
            square_1.Square.orientation = enums_1.Orientation.Sharp;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            bootstrap_test_1.expect(square_1.Square.orientation).is.eql(enums_1.Orientation.Sharp);
        });
        it("Then property size.width should eql outerRadius * 2", () => {
            bootstrap_test_1.expect(square_1.Square.size.width).is.eql(square_1.Square.outerRadius * 2);
        });
        it("Then property size.height should eql outerRadius * 2", () => {
            bootstrap_test_1.expect(square_1.Square.size.height).is.eql(square_1.Square.outerRadius * 2);
        });
    });
    describe("When innerRadius set to 50", () => {
        before(() => {
            square_1.Square.innerRadius = 50;
        });
        it("Then property innerRadius should eql 50", () => {
            bootstrap_test_1.expect(square_1.Square.innerRadius).is.eql(50);
        });
        it("Then property outerRadius shold eql innerRadius * Math.sqrt(2)", () => {
            bootstrap_test_1.expect(square_1.Square.outerRadius).is.eql(square_1.Square.innerRadius * Math.sqrt(2));
        });
    });
});
//# sourceMappingURL=square.test.js.map