import { expect } from "./bootstrap.test";
// ***************************************************************************
// * Sqaure
// ***************************************************************************
import { Orientation, Offset } from "../../src/enums";
import { Hexagon } from "../../src/hexagon";
import { Size } from "../../src/interfaces";
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Hexagon", () => {
    describe("Given orientation set to Orientation.Flat and radius", () => {
        it("Then getSize(radius, orientation) should return size with width eql to 2 * raduis * sine(60)", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Flat;
            let radians = (degree: number): number => (Math.PI / 180 * degree);
            let width = radius * 2 / Math.sin(radians(60));
            let size: Size = Hexagon.getSize(radius, orientation);
            expect(size.width).is.eql(width);
        });
        it("Then getSize(radius, orientation) should return size with height eql to 2 * raduis", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Flat;
            let height = radius * 2;
            let size: Size = Hexagon.getSize(radius, orientation);
            expect(size.height).is.eql(height);
        });
        it("Then getOffset(orientation) should return Offset.OddColumn", async () => {
            let orientation: Orientation = Orientation.Flat;
            let offset: Offset = Hexagon.getOffset(orientation);
            expect(offset).is.eql(Offset.OddColumn);
        });
    });
    describe("Given orientation set to Orientation.Sharp and radius", () => {
        it("Then getSize(radius, orientation) should return size with width eql to 2 * raduis", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Sharp;
            let width = radius * 2;
            let size: Size = Hexagon.getSize(radius, orientation);
            expect(size.width).is.eql(width);
        });
        it("Then getSize(radius, orientation) should return size with height eql to 2 * raduis * sine(60)", async () => {
            let radius: number = 50;
            let orientation: Orientation = Orientation.Sharp;
            let radians = (degree: number): number => (Math.PI / 180 * degree);
            let height = radius * 2 / Math.sin(radians(60));
            let size: Size = Hexagon.getSize(radius, orientation);
            expect(size.height).is.eql(height);
        });
        it("Then getOffset(orientation) should return Offset.OddRow", async () => {
            let orientation: Orientation = Orientation.Sharp;
            let offset: Offset = Hexagon.getOffset(orientation);
            expect(offset).is.eql(Offset.OddRow);
        });
    });
 });
