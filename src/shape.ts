export enum Shapes {
    Triangle = 3,
    Squares = 4,
    Hexagon = 6
}

export interface Coordinate {
    x: number;
    y: number;
}

export interface Options {
    center: Coordinate;
    size: number;
}

export abstract class Shape {
    public type: Shapes;
    public options: Options;
    public path: Coordinate[];
    constructor(type: Shapes, options: Options) {
        this.type = type;
        this.options = options;
        this.path = [];
    }

    public get innerAngle(): number {
        return 360 / this.type;
    }

    public get qtySegments(): number {
        return this.type;
    }

    public getSegmentAngle(segment: number) {
        return  segment * this.innerAngle;
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

    public getShapePath(): Coordinate[] {
        for (let index = 0; index < this.qtySegments; index++) {
            this.path.push(this.getSegmentEdgeCoordinates(index));
        }
        return this.path;
    }

    public cos = (degree: number): number => Math.cos(this.radians(degree))
    public sin = (degree: number): number => Math.sin(this.radians(degree))
    public scale = (value: number): number => this.options.size * value
    public round = (value: number): number => Math.round(value * 100) / 100
    public radians = (degree: number): number => (Math.PI / 180 * degree)
};
