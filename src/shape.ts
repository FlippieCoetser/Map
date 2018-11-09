import { Orientation, Shapes } from "./enums";
import { Coordinate } from "./interfaces";

export abstract class Shape {
    /* Static Memebers */
    private static _orientation: Orientation = Orientation.Flat;
    private static _innerRadius: number = 0;
    public static get orientation(): Orientation {
        return Shape._orientation;
    }
    public static get innerRadius(): number {
        return Shape._innerRadius;
    }
    public static set orientation(orientation: Orientation) {
        Shape._orientation = orientation;
    }
    public static set innerRadius(radius: number) {
        Shape._innerRadius = radius;
    }
    /* Instance Members */
    public path: Coordinate[];
    constructor(public center: Coordinate) {
    }
    public addOffset(coordinate: Coordinate): Coordinate {
        return {
            x: this.center.x + coordinate.x,
            y: this.center.y + coordinate.y,
        }
    }
    public cos = (degree: number): number => Math.cos(this.radians(degree))
    public sin = (degree: number): number => Math.sin(this.radians(degree))
    public round = (value: number): number => Math.round(value * 100) / 100
    public radians = (degree: number): number => (Math.PI / 180 * degree)
}
