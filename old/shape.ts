import { Shapes, Orientation } from "../src/enums";
import { Coordinate } from  "../src/interfaces";

export interface Options {
    center: Coordinate;
    size: number;
    orientation?: Orientation;
}


export abstract class Shape {
    public type: Shapes;
    public options: Options;
    public path: Coordinate[];
    // tslint:disable-next-line:no-empty
    public static getSize(radius: number, orientation: Orientation) {};
    constructor(type: Shapes, options: Options) {
        this.type = type;
        this.options = options;
        this.path = [];
        this.generatePath();
    }

    public get innerAngle(): number {
        return 360 / this.type;
    }

    public get qtySegments(): number {
        return this.type;
    }

    public get rotationAngle(): number {
        return (this.innerAngle / 2);
    }

    public get changeOrientation(): boolean {
        return this.options.orientation === Orientation.Sharp;
    }

    public getSegmentAngle(segment: number) {
        return  this.rotate(segment * this.innerAngle);
    }

    public getSegmentEdgeCoordinates(segment: number): Coordinate {
        let angle = this.getSegmentAngle(segment);
        let coordinate: Coordinate = {
            x: this.round(this.scale(this.cos(angle))),
            y: this.round(this.scale(this.sin(angle))),
        };
        return this.addOffset(coordinate);
    }

    public addOffset(coordinate: Coordinate): Coordinate {
        return {
            x: this.options.center.x + coordinate.x,
            y: this.options.center.y + coordinate.y,
        };
    }

    public scale(value: number): number {
        return this.options.size * value;
    }

    public rotate(angle: number): number {
        return  angle + (this.changeOrientation ? this.rotationAngle : 0 );
    }

    public generatePath(): Coordinate[] {
        for (let index = 0; index < this.qtySegments; index++) {
            this.path.push(this.getSegmentEdgeCoordinates(index));
        }
        return this.path;
    }

    public cos = (degree: number): number => Math.cos(this.radians(degree))
    public sin = (degree: number): number => Math.sin(this.radians(degree))
    public round = (value: number): number => Math.round(value * 100) / 100
    public radians = (degree: number): number => (Math.PI / 180 * degree)
};
