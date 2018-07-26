export enum Shapes {
    Triangle = 3,
    Squares = 4,
    Hexagon = 6
}

export interface Coordinate {
    "x": number;
    "y": number;
}

export interface Options {
    "center": Coordinate;
    "size": number;
}

export abstract class Shape {
    public type: Shapes;
    public options: Options;
    public segments: Coordinate[];
    constructor(type: Shapes, options: Options) {
        this.type = type;
        this.options = options;
        this.segments = [];
    }

    public get segmentAngle(): number {
        return 360 / this.type;
    }

    public get totalSegments(): number {
        return this.type;
    }

    public getSegmentAngle(segment: number) {
        return  segment * this.segmentAngle;
    }

    public getSegmentCorner(segment: number): Coordinate {
        let angle = this.getSegmentAngle(segment);
        let coordinate: Coordinate = {
            x: this.round(this.scale(this.cos(angle))),
            y: this.round(this.scale(this.sin(angle))),
        };
        return this.addOffset(coordinate);

    }

    public addOffset = (coordinate: Coordinate): Coordinate => {
        return {
            x: this.options.center.x + coordinate.x,
            y: this.options.center.y + coordinate.y,
        };
    };

    public getShapeCoordinates(): Coordinate[] {
        let index: number = 0;
        for (index = 0; index < this.totalSegments; index++) {
            this.segments.push(this.getSegmentCorner(index));
        }
        return this.segments;
    }
    public cos = (degree: number): number => Math.cos(this.degreesToRadians(degree));
    public sin = (degree: number): number => Math.sin(this.degreesToRadians(degree));
    public scale = (value: number): number => this.options.size * value;
    public round = (value: number): number => Math.round(value * 100) / 100;
    public degreesToRadians = (degree: number): number => (Math.PI / 180 * degree);

};
