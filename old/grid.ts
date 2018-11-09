import * as d3 from "d3";
import { Shapes, Orientation, Offset } from "../src/enums";
import { Size, Coordinate } from "../src/interfaces";
import { Tile } from "../src/tile";
import { Hexagon } from "../src/hexagon";

export interface Options {
    layer: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
    size?: {
        fullscreen?: boolean;
        width?: number;
        height?: number;
    };
    slot?: {
        type?: Shapes;
        orientation?: Orientation;
        size?: Size;
    };
    tile?: {
        type?: Shapes;
        orientation?: Orientation;
        radius?: number;
    };
    arrangement?: string;
}
/*
// tslint:disable-next-line:class-name
export interface tile {
    coordinates?: Coordinate;
    size?: Size;
    origin?: Coordinate;
}


export class View {
    public grid: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
    public rows: d3.Selection<d3.BaseType, Tile[], d3.BaseType, {}>;
    public tile: d3.Selection<d3.BaseType, Tile, d3.BaseType, Tile[]>;
    constructor(public layer: d3.Selection<d3.BaseType, {}, HTMLElement, any>, public coordinates: Tile[][] ) {
    }
    public drawTiles() {
        this.tile
        .append("rect")
        .attr("x", tile => tile.origin.x )
        .attr("y", tile => tile.origin.y )
        .attr("width", tile => tile.size.width)
        .attr("height", tile => tile.size.height)
        .style("fill", "#fff")
        .style("stroke", "#222");
        return this;
    }
    public addClick() {
        this.tile
            .on("click", () => {
                let selected = d3.select(d3.event.currentTarget).attr("selected") === "true" ? true : false;
                if (selected) {
                    d3.select(d3.event.currentTarget)
                    .attr("selected", false)
                    .select("rect")
                    .style("fill", "#fff");
                }
                if (!selected) {
                    d3.select(d3.event.currentTarget)
                    .attr("selected", true)
                    .select("rect")
                    .style("fill", "#2C93E8");
                }
            });
        return this;
    }
}


export class Grid2 {
    public view: View;
    public coordinates: Tile[][];
    public YAxis: number[];
    public XAxis: number[];
    public origin: Coordinate;
    public rows: number;
    public columns: number;
    public XOffset: boolean;
    public YOffset: boolean;
    constructor(public options: GridOptions) {
        // Load configuration
        this.initialize();
        // Load Model
        this.generateCoordinates();
        // Update Model
        this.addRow();
        this.addColumn();

        this.view = new View(this.options.layer, this.coordinates);
        this.view.createGrid()
                 .createRows()
                 .createColumns()
                 .drawTiles()
                 .drawCoordinates()
                 .enableZoom()
                 .addClick();
    }

    public initialize() {
        this.rows = 9;
        this.columns = 9;
        this.origin = {
            x: 1,
            y: 1,
        };
        this.XOffset = false;
        this.YOffset = false;
    }

    public generateCoordinates() {
        this.coordinates = [];
        for (let y = 0; y < this.rows; y++) {
            this.coordinates[y] = [];
            for (let x = 0; x < this.columns; x++) {
                this.coordinates[y][x] = new Tile({
                    coordinates: this.addGridOffset(this.getCoordinates({x: x, y: y})),
                    size: <Size>this.options.tile,
                });
            }
        }
    }

    public addGridOffset = (coordinates: Coordinate): Coordinate  => ({
        x: coordinates.x + (this.XOffset ? ((coordinates.y % 2) === 1 ? 0.5 * this.options.tile.size.width : 0) : 0),
        y: coordinates.y + (this.YOffset ? ((coordinates.x % 2) === 1 ? 0.5 * this.options.tile.size.width : 0) : 0),
    });

    public getCoordinates = (coordinates: Coordinate) => this.addOffset(this.getPosition(coordinates));

    public addOffset = (coordinates: Coordinate): Coordinate  => ({
        x: coordinates.x + 0.5 * this.options.tile.size.width,
        y: coordinates.y + 0.5 * this.options.tile.size.height,
    });

    public getPosition = (coordinates: Coordinate) => ({
        x: this.origin.x + this.options.tile.size.width * coordinates.x,
        y: this.origin.y + this.options.tile.size.height * coordinates.y,
    })

    public addRow() {
        let y = this.YMax;
        // create new row
        this.coordinates[y] = [];
        // add columns in row
        for (let x = 0; x < this.XMax; x++) {
            this.coordinates[y][x] = new Tile({
                coordinates: this.addGridOffset(this.getCoordinates({x: x, y: y})),
                size: <Size>this.options.tile,
            });
        };
    }

    public addColumn() {
        let x = this.XMax;
        // add column to each row
        for (let y = 0; y < this.YMax; y++) {
            this.coordinates[y][x] = new Tile({
                coordinates: this.addGridOffset(this.getCoordinates({x: x, y: y})),
                size: <Size>this.options.tile,
            });
        };
    }

    public get YMax() {
        return this.coordinates.length;
    }

    public get XMax() {
        return this.coordinates[0].length;
    }

    public test() {
        console.log(Array.from(Array(9).keys()));
    }
}



export class Tile {
    public spacing: Coordinate;
}

*/

export class View {
    public element: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
    public grid: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
    public rows: d3.Selection<d3.BaseType, Coordinate[], d3.BaseType, {}>;
    public columns: d3.Selection<d3.BaseType, Coordinate, d3.BaseType, Coordinate[]>;
    public line; 
    public path;
    constructor() {
    }
    public createGrid(element: d3.Selection<d3.BaseType, {}, HTMLElement, any>) {
        this.element = element;
        this.grid = element
        .append("g")
        .attr("class", "grid");
        return this;
    }
    public createRows(coordinates: Coordinate[][]) {
        this.rows = this.grid
        .selectAll(".row")
        .data(coordinates)
        .enter()
        .append("g")
        .attr("y", (d, i) => i)
        .attr("class", "row");
        return this;
    }
    public createColumns() {
        this.columns = this.rows
        .selectAll(".square")
        .data(coordinates => coordinates)
        .enter()
        .append("g")
        .attr("x", (d, i) => i)
        .attr("class", "column")
        .attr("selected", false);
        return this;
    }

    public drawCoordinates() {
        this.columns
        .append("circle")
        .attr("cx", coordinates => coordinates.x)
        .attr("cy", coordinates => coordinates.y)
        .attr("r", 1)
        .style("stroke", "Grey")
        .style("stroke-width", "1")
        .style("fill", "White");
        return this;
    }

    public generateLine() {
        this.line = d3
            .line<Coordinate>()
            .x((d) => d.x)
            .y((d) => d.y)
            .curve(d3.curveLinearClosed);
            // .curve(d3.curveCardinalClosed.tension(0.50));
        return this;
    }

    public generatePath(size: number, orientation: Orientation) {
        this.path = this.columns
            .append("path")
            .attr("d", coordinates => this.line(new Hexagon({
                center: {
                    x: coordinates.x,
                    y: coordinates.y,
                },
                size: size,
                orientation: orientation, 
            }).path))
            .attr("stroke", "red")
            // .attr("stroke-dasharray", "5,5")
            // .attr("stroke-width", 3)
            .attr("fill", "rgba(255,0,0,0.4)");
    }

    public enableZoom() {
        let zoomed = () => {
            this.grid.attr("transform", d3.event.transform);
        };

        this.element.call(d3.zoom()
            .scaleExtent([1 / 2, 12])
            .on("zoom", zoomed)
        );
        return this;
    }
}

export class Grid {
    public view: View;
    public coordinates: Coordinate[][];
    private _size: Size;
    private _offset: Offset;
    private _spacing: Size;
    private _columns: number;
    private _rows: number;
    public static calcMax = (size: number, spacing: number): number => Math.round(size / spacing);
    public static createAxis = (size: number): number[] => Array.from(Array(size).keys());
    public static getViewportWidth = (): number => document.documentElement.clientWidth;
    public static getViewportHeight = (): number => document.documentElement.clientHeight;
    constructor(public options: Options) {
        this._initialize();
        this.view = new View();
        this.generateCoordinates();
        this.view.createGrid(this.options.layer)
                 .createRows(this.coordinates)
                 .createColumns()
                 .drawCoordinates()
                 .enableZoom()
                 .generateLine()
                 .generatePath(57.5, this.options.tile.orientation);
    }
    public get size(): Size {
        return this._size;
    }
    public get spacing(): Size {
        return this._spacing;
    }
    public get offset(): Offset {
        return this._offset;
    }
    public get columns(): number {
        return this._columns;
    }

    public get rows(): number {
        return this._rows;
    }

    public addGridOffset = (coordinates: Coordinate): Coordinate  => ({
        x: (this._isOdd(coordinates.y) ? this._getXOffset(): 0),
        y: (this._isOdd(coordinates.x) ? this._getYOffset(): 0),  

    });
    public getPosition = (coordinates: Coordinate) => ({
        x: 1 + this.spacing.width * (0.5 + coordinates.x),
        y: 1 + this.spacing.height * (0.5 + coordinates.y),
    })
    public generateCoordinates() {
        this.coordinates = [];
        for (let y = 0; y < this.rows; y++) {
            this.coordinates[y] = [];
            for (let x = 0; x < this.columns; x++) {
                let offset = this.addGridOffset({
                    x: x,
                    y: y,
                })
                let position = this.getPosition({
                    x: x,
                    y: y,
                })
                this.coordinates[y][x] = {
                    x: offset.x + position.x,
                    y: offset.y + position.y,
                };
            }
        }
    }
    private _initialize() {
        this._setSize();
        this._setSpacing();
        this._setOffset();
        this._setColumns();
        this._setRows();
    }
    private _setSize() {
        let viewport: Size = {
            width: Grid.getViewportWidth(),
            height: Grid.getViewportHeight(),
        };
        let size: Size = {
            width: this.options.size.width || Grid.getViewportWidth(),
            height: this.options.size.height || Grid.getViewportHeight(),
        };
        this._size = this.options.size.fullscreen ? viewport : size;
    }
    private _setSpacing() {
        this._spacing = Tile.getSize(this.options.tile);
    }
    private _setOffset() {
        this._offset = Tile.getOffset(this.options.tile);
    }
    private _setColumns() {
        this._columns = Grid.calcMax(this.size.width, this.spacing.width);
    }
    private _setRows() {
        this._rows = Grid.calcMax(this.size.height, this.spacing.height);
    }
    private _getXOffset() {
        if ((this._offset === Offset.EvenRow) || (this._offset === Offset.OddRow)) {
            return Tile.getCenter(this.spacing.width);
        }
        else {
            return 0;
        }
    }
    private _getYOffset() {
        if ((this._offset === Offset.EvenColumn) || (this._offset === Offset.OddColumn)) {
            return Tile.getCenter(this.spacing.height);
        }
        else {
            return 0;
        }
    }
    private _isOdd(value: number) {
        return value % 2 === 1;
    }
};
