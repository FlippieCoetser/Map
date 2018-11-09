// tslint:disable-next-line:no-unused-variable
import { expect, sinon } from "./bootstrap.test";
import { Shapes, Orientation } from "../../src/enums";
import { Square } from "../../src/square";
import { Hexagon } from "../../src/hexagon";
// ***************************************************************************
// * Tile
// ***************************************************************************
import { Tile } from "../../src/tile";
// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given Tile", () => {
    it("Then shape should exist", () => {
        expect(Tile.shape).to.not.undefined;
    });
    describe("When setType(sqaure)", () => {
        before( () => {
            let  shape = Shapes.Square
            Tile.type = shape
        });
        it("Then shape should  eql Square", () => {
            expect(Tile.shape).is.eql(Square);
        });
    });
    describe("When setType(hexagon)", () => {
        before( () => {
            let  shape = Shapes.Hexagon
            Tile.type = shape
        });
        it("Then shape should eql Hexagon", () => {
            expect(Tile.shape).is.eql(Hexagon);
        });
    });
    it("Then a property orientation should exist", () => {
        expect(Tile.orientation).to.not.undefined;
    });
    describe("When set orientation to Orientation.Flat", () => {
        before( () => {
            Tile.orientation = Orientation.Flat
        });
        it("Then get orientation should eql Orientation.Flat", () => {
            expect(Tile.orientation).is.eql(Orientation.Flat);
        });
    });
    describe("When set orientation to Orientation.Sharp", () => {
        before( () => {
            Tile.orientation = Orientation.Sharp
        });
        it("Then get orientation should eql Orientation.Flat", () => {
            expect(Tile.orientation).is.eql(Orientation.Sharp);
        });
    });
    it("Then a property size should exist", () => {
        expect(Tile.size).to.not.undefined;
    });
    it("Then a property innerRadius should exist", () => {
        expect(Tile.innerRadius).to.not.undefined;
    });
    describe("When set innerRadius to 50", () => {
        before( () => {
            Tile.innerRadius = 50
        });
        it("Then get innerRadius should eql 50", () => {
            expect(Tile.innerRadius).is.eql(50);
        });
    });
});
