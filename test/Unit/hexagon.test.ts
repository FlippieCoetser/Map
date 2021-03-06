// tslint:disable-next-line:no-unused-variable
import { expect, sinon } from "./bootstrap.test";
import { Orientation } from "../../src/enums";
// ***************************************************************************
// * Hexagon
// ***************************************************************************
import { Hexagon } from "../../src/hexagon";
// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given Hexagon", () => {
    it("Then a property vertices should exist", () => {
        expect(Hexagon.vertices).to.not.undefined;
    });
    it("Then a property vertices should eql 6", () => {
        expect(Hexagon.vertices).is.eql(6);
    });
    it("Then a property innerAngle should exist", () => {
        expect(Hexagon.innerAngle).to.not.undefined
    });
    it("Then a property innerAngle should eql 60", () => {
        expect(Hexagon.innerAngle).is.eql(60);
    });
    it("Then a property orientation should exist", () => {
        expect(Hexagon.orientation).to.not.undefined;
    });
    it("Then a property innerRadius should exist", () => {
        expect(Hexagon.innerRadius).to.not.undefined;
    });
    it("Then a property outerRadius should exist", () => {
        expect(Hexagon.outerRadius).to.not.undefined;
    });
    it("Then a property size should exist", () => {
        expect(Hexagon.size).to.not.undefined;
    });
    describe("When orientation set to Orientation.Flat", () => {
        before( () => {
            Hexagon.orientation = Orientation.Flat;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            expect(Hexagon.orientation).is.eql(Orientation.Flat);
        });
        it("Then property size.width should eql outerRadius * 2", () => {
            expect(Hexagon.size.width).is.eql(Hexagon.outerRadius * 2);
        });
        it("Then property size.height should eql innerRadius * 2", () => {
            expect(Hexagon.size.height).is.eql(Hexagon.innerRadius * 2);
        });
    });
    describe("When orientation set to Orientation.Sharp", () => {
        before( () => {
            Hexagon.orientation = Orientation.Sharp;
        });
        it("Then property orientation should eql Orientatin.Sharp", () => {
            expect(Hexagon.orientation).is.eql(Orientation.Sharp);
        });
        it("Then property size.width should eql innerRadius * 2", () => {
            expect(Hexagon.size.width).is.eql(Hexagon.innerRadius * 2);
        });
        it("Then property size.height should eql outerRadius * 2", () => {
            expect(Hexagon.size.height).is.eql(Hexagon.outerRadius * 2);
        });
    });
    describe("When innerRadius set to 50", () => {
        before( () => {
            Hexagon.innerRadius = 50
        });
        it("Then property innerRadius should eql 50", () => {
            expect(Hexagon.innerRadius).is.eql(50);
        });
        it("Then property outerRadius shold eql innerRadius * Math.sqrt(2)", () => {
            expect(Hexagon.outerRadius).is.eql(Hexagon.innerRadius * 2 / Math.sqrt(3));
        });
    });
});
