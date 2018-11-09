import { Options, Shape } from "./shape";
import { Shapes, Orientation, Offset } from "../src/enums";
import { Size } from "../src/interfaces";

export class Hexagon extends Shape {
    public static getSize(radius: number, orientation: Orientation) {
        if (orientation === Orientation.Flat) {
            let radians = (degree: number): number => (Math.PI / 180 * degree);
            let size: Size = {
                width: radius * 2 / Math.sin(radians(60)),
                height: radius * 2,
            };
            return size;
        }
        if (orientation === Orientation.Sharp) {
            let radians = (degree: number): number => (Math.PI / 180 * degree);
            let size: Size = {
                width: radius * 2,
                height: radius * 2 / Math.sin(radians(60)),
            };
            return size;
        }
    };
    public static getOffset(orientation: Orientation) {
        if (orientation === Orientation.Flat) {
            return Offset.OddColumn;
        }
        if (orientation === Orientation.Sharp) {
            return Offset.OddRow;
        }
    }
    constructor(options: Options) {
        super(Shapes.Hexagon,  options);
    }
};
