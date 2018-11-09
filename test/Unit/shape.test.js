"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
const bootstrap_test_1 = require("./bootstrap.test");
const enums_1 = require("../../src/enums");
// ***************************************************************************
// * Shape
// ***************************************************************************
const shape_1 = require("../../src/shape");
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Shape", () => {
    it("Then a property orientation should exist", () => {
        bootstrap_test_1.expect(shape_1.Shape.orientation).to.not.undefined;
    });
    describe("When orientation set to Orientation.Sharp", () => {
        shape_1.Shape.orientation = enums_1.Orientation.Sharp;
        it("Then property orientation should eql Orientatin.Sharp", () => {
            bootstrap_test_1.expect(shape_1.Shape.orientation).is.eql(enums_1.Orientation.Sharp);
        });
    });
    it("Then a property innerRadius should exist", () => {
        bootstrap_test_1.expect(shape_1.Shape.innerRadius).to.not.undefined;
    });
    describe("When innerRadius set to 50", () => {
        shape_1.Shape.innerRadius = 50;
        it("Then property innerRadius should eql 50", () => {
            bootstrap_test_1.expect(shape_1.Shape.innerRadius).is.eql(50);
        });
    });
});
//# sourceMappingURL=shape.test.js.map