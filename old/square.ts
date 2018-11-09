import { Options, Shape } from "../src/shape";
import { Shapes, Orientation, Offset} from "../src/enums";
import { Size } from "../src/interfaces";

export class Square extends Shape {
    public static getSize(radius: number, orientation: Orientation) {
        if (orientation === Orientation.Flat) {
            let size: Size = {
                width: radius * 2,
                height: radius * 2,
            };
            return size;
        }
        if (orientation === Orientation.Sharp) {
            let spacing: Size = {
                width: radius * Math.sqrt(2) * 2,
                height: radius * Math.sqrt(2) * 2,
            };
            return spacing;
        }
    };
    public static getOffset(orientation: Orientation) {
        if (orientation === Orientation.Flat) {
            return Offset.None;
        }
        if (orientation === Orientation.Sharp) {
            return Offset.OddRow;
        }
    }
    constructor(options: Options) {
        super(Shapes.Square,  options);
    }
};
