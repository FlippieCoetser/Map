"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
const bootstrap_test_1 = require("./bootstrap.test");
const enums_1 = require("../../src/enums");
const square_1 = require("../../src/square");
const hexagon_1 = require("../../src/hexagon");
// ***************************************************************************
// * Tile
// ***************************************************************************
const tile_1 = require("../../src/tile");
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Tile", () => {
    it("Then shape should exist", () => {
        bootstrap_test_1.expect(tile_1.Tile.shape).to.not.undefined;
    });
    describe("When setType(sqaure)", () => {
        before(() => {
            let shape = enums_1.Shapes.Square;
            tile_1.Tile.type = shape;
        });
        it("Then shape should  eql Square", () => {
            bootstrap_test_1.expect(tile_1.Tile.shape).is.eql(square_1.Square);
        });
    });
    describe("When setType(hexagon)", () => {
        before(() => {
            let shape = enums_1.Shapes.Hexagon;
            tile_1.Tile.type = shape;
        });
        it("Then shape should eql Hexagon", () => {
            bootstrap_test_1.expect(tile_1.Tile.shape).is.eql(hexagon_1.Hexagon);
        });
    });
    it("Then a property orientation should exist", () => {
        bootstrap_test_1.expect(tile_1.Tile.orientation).to.not.undefined;
    });
    describe("When set orientation to Orientation.Flat", () => {
        before(() => {
            tile_1.Tile.orientation = enums_1.Orientation.Flat;
        });
        it("Then get orientation should eql Orientation.Flat", () => {
            bootstrap_test_1.expect(tile_1.Tile.orientation).is.eql(enums_1.Orientation.Flat);
        });
    });
    describe("When set orientation to Orientation.Sharp", () => {
        before(() => {
            tile_1.Tile.orientation = enums_1.Orientation.Sharp;
        });
        it("Then get orientation should eql Orientation.Flat", () => {
            bootstrap_test_1.expect(tile_1.Tile.orientation).is.eql(enums_1.Orientation.Sharp);
        });
    });
    it("Then a property size should exist", () => {
        bootstrap_test_1.expect(tile_1.Tile.size).to.not.undefined;
    });
    it("Then a property innerRadius should exist", () => {
        bootstrap_test_1.expect(tile_1.Tile.innerRadius).to.not.undefined;
    });
    describe("When set innerRadius to 50", () => {
        before(() => {
            tile_1.Tile.innerRadius = 50;
        });
        it("Then get innerRadius should eql 50", () => {
            bootstrap_test_1.expect(tile_1.Tile.innerRadius).is.eql(50);
        });
    });
});
//# sourceMappingURL=tile.test.js.map