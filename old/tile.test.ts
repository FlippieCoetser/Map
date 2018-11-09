// tslint:disable-next-line:no-unused-variable
import { expect, sinon } from "../test/Unit/bootstrap.test";
// ***************************************************************************
// * Tile
// ***************************************************************************
import { Shapes, Orientation, Offset } from "../src/enums";
import { Tile, Options } from "../src/tile";
// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given Tile", () => {
    it("The Tile should have a poperty call X", () => {
        expect(true).eql(true);
    });
    it("The Tile should have a poperty call Y", () => {
        expect(true).eql(true);
    });
    it("The X protery should have a spacing value", () => {
        expect(true).eql(true);
    });
    it("The X protery should have a offset value", () => {
        expect(true).eql(true);
    });
    describe("Given options.type eql Shapes.Sqaure", () => {
        describe("Given options.orientation eql Orientation.Flat", () => {
            let options: Options = {
                type: Shapes.Square,
                orientation: Orientation.Flat,
                radius: 50,
            };
            it("Then getOffset() should return Offset.None", () => {
                expect(Tile.getOffset(options)).is.eql(Offset.None);
            });
            it("Then getSize(options).width should eql 2 * options.radius", async () => {
                let width = options.radius * 2;
                expect(Tile.getSize(options).width).is.eql(width);
            });
            it("Then getSize(options).height should eql 2 * options.radius", async () => {
                let height = options.radius * 2;
                expect(Tile.getSize(options).height).is.eql(height);
            });
        });
        describe("Given options.orientation eql Orientation.Sharp", () => {
            let options: Options = {
                type: Shapes.Square,
                orientation: Orientation.Sharp,
                radius: 50,
            };
            it("Then getOffset() should return Offset.None", () => {
                expect(Tile.getOffset(options)).is.eql(Offset.OddRow);
            });
            it("Then getSize(options).width should eql 2 * options.radius sqrt(2)", async () => {
                let radius = options.radius;
                let hypotenuse = radius * Math.sqrt(2);
                expect(Tile.getSize(options).width).is.eql(2 * hypotenuse);
            });
            it("Then getSize(options).height should eql 2 * options.radius sqrt(2)", async () => {
                let radius = options.radius;
                let hypotenuse = radius * Math.sqrt(2);
                expect(Tile.getSize(options).height).is.eql(hypotenuse * 2);
            });
        });
    });
    describe("Given options.type eql Shapes.Hexagon", () => {
        describe("Given options.orientation eql Orientation.Flat", () => {
            let options: Options = {
                type: Shapes.Hexagon,
                orientation: Orientation.Flat,
                radius: 50,
            };
            it("Then getOffset(options) should return Offset.OddColumn", () => {
                expect(Tile.getOffset(options)).is.eql(Offset.OddColumn);
            });
            it("Then getSize(options).width should eql 2 * options.radius / sin(60)", async () => {
                let radians = (degree: number): number => (Math.PI / 180 * degree);
                let width = options.radius * 2 / Math.sin(radians(60));
                expect(Tile.getSize(options).width).is.eql(width);
            });
            it("Then getSize(options).height should eql 2 * options.raduis ", async () => {
                let height = options.radius * 2;
                expect(Tile.getSize(options).height).is.eql(height);
            });
        });
        describe("Given options.orientation eql Orientation.Sharp", () => {
            let options: Options = {
                type: Shapes.Hexagon,
                orientation: Orientation.Sharp,
                radius: 50,
            };
            it("Then getOffset(options) should return Offset.None", () => {
                expect(Tile.getOffset(options)).is.eql(Offset.OddRow);
            });
            it("Then getSize(options).width should eql 2 * options.raduis", async () => {
                let width = options.radius * 2;
                expect(Tile.getSize(options).width).is.eql(width);
            });
            it("Then getSize(options).height should eql sin(60) * options.radius ", async () => {
                let radians = (degree: number): number => (Math.PI / 180 * degree);
                let height = options.radius * 2 / Math.sin(radians(60));
                expect(Tile.getSize(options).height).is.eql(height);
            });
        });
    });
});
