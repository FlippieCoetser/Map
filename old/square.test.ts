import { expect } from "../test/Unit/bootstrap.test";
// ***************************************************************************
// * Sqaure
// ***************************************************************************
import { Orientation, Offset  } from "../src/enums";
import { Square } from "../src/square";
import { Size } from "../src/interfaces";
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Sqaure", () => {
    describe("Given orientation set to Orientation.Flat and radius", () => {
        it("Then getSize(radius, orientation) should return size with width eql to 2 * radius", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Flat;
            let width = radius * 2;
            let size: Size = Square.getSize(radius, orientation);
            expect(size.width).is.eql(width);
        });
        it("Then getSize(radius, orientation) should return size with height eql to 2 * radius", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Flat;
            let height = radius * 2;
            let size: Size = Square.getSize(radius, orientation);
            expect(size.height).is.eql(height);
        });
        it("Then getOffset(orientation) should return Offset.None", async () => {
            let orientation: Orientation = Orientation.Flat;
            let offset: Offset = Square.getOffset(orientation);
            expect(offset).is.eql(Offset.None);
        });
    });
    describe("Given orientation set to Orientation.Sharp and radius", () => {
        it("Then getSize(radius, orientation) should return size with width eql to 2 * raduis * sqrt(2)", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Sharp;
            let width = radius * 2 * Math.sqrt(2);
            let size: Size = Square.getSize(radius, orientation);
            expect(size.width).is.eql(width);
        });
        it("Then getSize(radius, orientation) should return size with height eql to 2 * raduis * sqrt(2)", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Sharp;
            let height = radius * 2 * Math.sqrt(2);
            let size: Size = Square.getSize(radius, orientation);
            expect(size.height).is.eql(height);
        });
        it("Then getOffset(orientation) should return Offset.OddRow", async () => {
            let orientation: Orientation = Orientation.Sharp;
            let offset: Offset = Square.getOffset(orientation);
            expect(offset).is.eql(Offset.OddRow);
        });
    });
 });
