import { Shape} from "./shape";
import { Orientation, Shapes } from "./enums";
import { Size, Coordinate } from "./interfaces";

export class Square extends Shape {
    public static get vertices(): number {
        return 4;
    }
    public static get innerAngle(): number {
        return 360 / Square.vertices;
    }
    public static get outerRadius(): number {
        return Square.innerRadius * Math.sqrt(2);
    }
    public static get size(): Size {
        let isFlat = (Square.orientation === Orientation.Flat);
        return {
            width: isFlat ? (Square.innerRadius * 2) : (Square.outerRadius * 2) ,
            height: isFlat ? (Square.innerRadius * 2) : (Square.outerRadius * 2),
        };
    }
    constructor(center: Coordinate) {
        super(center);
    }
}
