import { Size, Coordinate } from  "./interfaces";
import { Orientation, Shapes } from "./enums";
import { Square } from "./square";
import { Hexagon } from "./hexagon";

export interface Config {
    type?: Shapes;
    orientation?: Orientation;
    radius?: number;
}

export class Tile {
    private static _shape = Square;
    private static _shapes = {
        Square: Square,
        Hexagon: Hexagon,
    };
    public static get orientation() {
        return Tile.shape.orientation;
    }
    public static get shape() {
        return  Tile._shape;
    }
    public static get size(): Size {
        return Tile.shape.size;
    }
    public static get innerRadius(): number {
        return Tile.shape.innerRadius;
    }
    public static set type(shape: Shapes) {
        Tile._shape = Tile._shapes[Shapes[shape]];
    }
    public static set orientation(orienation: Orientation) {
        Tile.shape.orientation = orienation;
    }
    public static set innerRadius(radius: number) {
        Tile.shape.innerRadius = radius;
    }
    public static configure(config: Config ) {
        Tile.type = config.type;
        Tile.orientation = config.orientation;
        Tile.innerRadius = config.radius;
    }
    public path: Coordinate[];
    constructor(center: Coordinate) {
        let shape = new Tile.shape(center);
        this.path = shape.path;
    }
}
