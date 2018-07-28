import {expect} from "./bootstrap.test";
// ***************************************************************************
// * Dictionary
// ***************************************************************************
import {Options, Shapes, Shape} from "../../src/shape";
import { Hexagon } from "../../src/hexagon";
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Hexagon", () => {
    let options: Options = {
        center: {
            x: 0,
            y: 0,
        },
        size: 100,
    };

    it("When instantiated then type should eql Shapes.Hexagon", () => {
        let hexagon: Shape = new Hexagon(options);
        let shape = Shapes.Hexagon;
        expect(hexagon.type).eql(shape);
    });

    it("When instantiated with specific center then .center should the same", () => {
        let hexagon: Shape = new Hexagon(options);
        expect(hexagon.options.center).eql(options.center);
    });

    it("When instantiated with specific size then .size should the same", () => {
        let hexagon: Shape = new Hexagon(options);
        expect(hexagon.options.size).eql(options.size);
    });

    it("When instantiated then qtySegments should eql 6", () => {
        let hexagon: Shape = new Hexagon(options);
        let segments = 6;
        expect(hexagon.qtySegments).eql(segments);
    });

    it("When instantiated then segmentAngle should eql 60", () => {
        let hexagon: Shape = new Hexagon(options);
        let segmentAngle = 60;
        expect(hexagon.innerAngle).eql(segmentAngle);
    });

    it("When 0 is paased as segment to angle(segment) then 0 should be returned", () => {
        let hexagon: Shape = new Hexagon(options);
        let segment = 0;
        expect(hexagon.getSegmentAngle(segment)).eql(0);
    });

    it("When 1 is paased as segment to angle(segment) then 60 should be returned", () => {
        let hexagon: Shape = new Hexagon(options);
        let segment = 1;
        expect(hexagon.getSegmentAngle(segment)).eql(60);
    });

    it("When 2 is paased as segment to angle(segment) then 120 should be returned", () => {
        let hexagon: Shape = new Hexagon(options);
        let segment = 1;
        expect(hexagon.getSegmentAngle(segment)).eql(60);
    });

    it("When 6 is passed as segment to getSegmentAngle(segment) then an err should be thrown", () => {
        let hexagon: Shape = new Hexagon(options);
        let segment = 6;
        expect(hexagon.getSegmentAngle(segment)).eql(360);
    });


    it("When 7 is paased as segment to angle(segment) then 0 should be returned", () => {
        let hexagon: Shape = new Hexagon(options);
        console.log(hexagon.getShapePath());
    });
});
