import { Shape } from "./shape";
import { Orientation } from "./enums";
import { Size, Coordinate } from "./interfaces";

export class Hexagon extends Shape {
    /* Static Members*/
    public static get vertices(): number {
        return 6;
    }
    public static get innerAngle(): number {
        return 360 / Hexagon.vertices;
    }
    public static get outerRadius(): number {
        return Hexagon.innerRadius * 2 / Math.sqrt(3);
    }
    public static get size(): Size {
        return {
            width: Hexagon.isFlat ? Hexagon.outerDiameter : Hexagon.innerDiameter,
            height: Hexagon.isFlat ? Hexagon.innerDiameter : Hexagon.outerDiameter,
        };
    }
    public static get outerDiameter(): number {
        return Hexagon.outerRadius * 2;
    }
    public static get innerDiameter(): number {
        return Hexagon.innerRadius * 2;
    }
    public static get isFlat(): boolean {
        return Hexagon.orientation === Orientation.Flat;
    }
    public static get rotationAngle(): number {
        return Hexagon.innerAngle / 2;
    }
    /* Instance Members */
    constructor(center: Coordinate) {
        super(center)
        this.generatePath();
    }
    public rotate(angle: number): number {
        return angle + (!Hexagon.isFlat ? Hexagon.rotationAngle : 0);
    }
    public getSegmentAngle(segment: number) {
        return this.rotate(segment * Hexagon.innerAngle)
    }
    public scale(value: number): number {
        return Hexagon.outerRadius * value;
    }
    public getSegmentEdge(segment: number): Coordinate {
        let angle = this.getSegmentAngle(segment);
        let coordinate: Coordinate = {
            x: this.round(this.scale(this.cos(angle))),
            y: this.round(this.scale(this.sin(angle))),
        }
        return this.addOffset(coordinate);
    }
    public generatePath(): Coordinate[] {
        this.path = [];
        for (let index = 0; index < Hexagon.vertices; index ++) {
            this.path.push(this.getSegmentEdge(index));
        }
        return this.path;
    }
}
