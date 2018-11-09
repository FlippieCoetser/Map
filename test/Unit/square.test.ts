// tslint:disable-next-line:no-unused-variable
import { expect, sinon } from "./bootstrap.test";
import { Orientation } from "../../src/enums";
// ***************************************************************************
// * Square
// ***************************************************************************
import { Square } from "../../src/square";
// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given Square", () => {
    it("Then a property vertices should exist", () => {
        expect(Square.vertices).to.not.undefined;
    });
    it("Then a property vertices should eql 4", () => {
        expect(Square.vertices).is.eql(4);
    });
    it("Then a property innerAngle should exist", () => {
        expect(Square.innerAngle).to.not.undefined;
    });
    it("Then a property innerAngle should eql 90", () => {
        expect(Square.innerAngle).is.eql(90);
    });
    it("Then a property orientation should exist", () => {
        expect(Square.orientation).to.not.undefined;
    });
    it("Then a property innerRadius should exist", () => {
        expect(Square.innerRadius).to.not.undefined;
    });
    it("Then a property outerRadius should exist", () => {
        expect(Square.outerRadius).to.not.undefined;
    });
    it("Then a property size should exist", () => {
        expect(Square.size).to.not.undefined;
    });
    describe("When orientation set to Orientation.Flat", () => {
        before( () => {
            Square.orientation = Orientation.Flat;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            expect(Square.orientation).is.eql(Orientation.Flat);
        });
        it("Then property size.width should eql innerRadius * 2", () => {
            expect(Square.size.width).is.eql(Square.innerRadius * 2);
        });
        it("Then property size.height should eql innerRadius * 2", () => {
            expect(Square.size.height).is.eql(Square.innerRadius * 2);
        });
    });
    describe("When orientation set to Orientation.Sharp", () => {
        before( () => {
            Square.orientation = Orientation.Sharp;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            expect(Square.orientation).is.eql(Orientation.Sharp);
        });
        it("Then property size.width should eql outerRadius * 2", () => {
            expect(Square.size.width).is.eql(Square.outerRadius * 2);
        });
        it("Then property size.height should eql outerRadius * 2", () => {
            expect(Square.size.height).is.eql(Square.outerRadius * 2);
        });
    });
    describe("When innerRadius set to 50", () => {
        before( () => {
            Square.innerRadius = 50;
        });
        it("Then property innerRadius should eql 50", () => {
            expect(Square.innerRadius).is.eql(50);
        });
        it("Then property outerRadius shold eql innerRadius * Math.sqrt(2)", () => {
            expect(Square.outerRadius).is.eql(Square.innerRadius * Math.sqrt(2));
        });
    });
});
