// tslint:disable-next-line:no-unused-variable
import { expect, sinon } from "./bootstrap.test";
import { Orientation } from "../../src/enums";
// ***************************************************************************
// * Shape
// ***************************************************************************
import { Shape } from "../../src/shape";
// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given Shape", () => {
    it("Then a property orientation should exist", () => {
        expect(Shape.orientation).to.not.undefined;
    });
    describe("When orientation set to Orientation.Sharp", () => {
        Shape.orientation = Orientation.Sharp
        it("Then property orientation should eql Orientatin.Sharp", () => {
            expect(Shape.orientation).is.eql(Orientation.Sharp);
        })
    })
    it("Then a property innerRadius should exist", () => {
        expect(Shape.innerRadius).to.not.undefined;
    });
    describe("When innerRadius set to 50", () => {
        Shape.innerRadius = 50
        it("Then property innerRadius should eql 50", () => {
            expect(Shape.innerRadius).is.eql(50);
        })
    })
});
