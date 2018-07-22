export class Hexagon {
    // tslint:disable-next-line:no-empty
    constructor() { }
    public loadData() {
        let radius = 100;
        let xp = 250;
        let yp = 150;
        let h = (Math.sqrt(3) / 2);
        return [
            { "x": radius + xp,   "y": yp},
            { "x": radius / 2 + xp,  "y": radius * h + yp},
            { "x": -radius / 2 + xp,  "y": radius * h + yp},
            { "x": -radius + xp,  "y": yp},
            { "x": -radius / 2 + xp,  "y": -radius * h + yp},
            { "x": radius / 2 + xp, "y": -radius * h + yp},
          ];
    }
}
