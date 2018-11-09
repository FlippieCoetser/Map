import { Shapes, Orientation, Offset } from "./enums";
// tslint:disable-next-line:no-unused-variable
import { Size, Coordinate } from "./interfaces";
import { Square } from "./square";
import { Hexagon } from "./hexagon";

/*
export interface TileOptions {
    type?: Shapes;
    orientation?: Orientation;
    coordinates: Coordinate;
    size: Size;
}

export class Tile {
    public coordinates: Coordinate;
    public origin: Coordinate;
    public size: Size;
    constructor(options: TileOptions) {
        this.coordinates = options.coordinates;
        this.size = options.size;
        this.origin = this.getOrigin(this.coordinates);
    }
    public getOrigin = (coordinate: Coordinate): Coordinate => ({
        x: this.coordinates.x - 0.5 * this.size.width,
        y: this.coordinates.y - 0.5 * this.size.height,
    })
}
*/

export interface Options {
    type?: Shapes;
    orientation?: Orientation;
    radius?: number;
}

export class Tile {
    private static _shapes = {
        "Square": Square,
        "Hexagon": Hexagon,
    };
    public static getSize = (options: Options): Size => Tile._getShape(options.type).getSize(options.radius, options.orientation);
    public static getOffset = (options: Options): Offset => Tile._getShape(options.type).getOffset(options.orientation);
    public static getCenter = (size: number): number => size / 2;
    private static _getShape = (type: Shapes) => Tile._shapes[Shapes[type]];
    // tslint:disable-next-line:no-empty
    constructor() {}
};
