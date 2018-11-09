import * as d3 from "d3";
import { Coordinate, Size } from "./interfaces";
import { Orientation, Shapes, Offset } from "./enums";
import { Tile, Config } from "./tile";
import { Hexagon } from "../src/hexagon";

export interface Options {
    layer: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
    size?: {
        fullscreen?: boolean;
        width?: number;
        height?: number;
    };
    tile?: Config;
    arrangement?: string;
}

export class View {
    public element: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
    public grid: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
    public rows: d3.Selection<d3.BaseType, Coordinate[], d3.BaseType, {}>;
    public columns: d3.Selection<d3.BaseType, Coordinate, d3.BaseType, Coordinate[]>;
    public line;
    public tile;
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
        .attr("class", "column");
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
            .x( (d) => d.x)
            .y( (d) => d.y)
            .curve(d3.curveLinearClosed)
        return this;
    }
    public generatePath(size: number) {
        this.tile = this.columns
            .append("path")
            .attr("d", coordinates => this.line(new Tile(coordinates).path))
            .attr("stroke", "rgba(255,255,255,0.2)")
            .attr("fill", "rgba(255,255,255,0.2)")
            .attr("class", "tile")
            .attr("selected", false);
        return this;
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

    public addClick() {
        this.tile
            .on("click", () => {
                let selected = d3.select(d3.event.currentTarget).attr("selected") === "true" ? true : false;
                if (selected) {
                    d3.select(d3.event.currentTarget)
                    .attr("selected", false)
                    .style("fill", "rgba(15,77,168,0.2)");
                }
                if (!selected) {
                    d3.select(d3.event.currentTarget)
                    .attr("selected", true)
                    .style("fill", "rgba(15,77,168,1)");
                }
            });
        return this;
    }
    public addOnHover() {
        function mouseover() {
            let selected = d3.select(d3.event.currentTarget).attr("selected") === "true" ? true : false;
            if (!selected) {
                d3.select(d3.event.currentTarget).style("fill", "rgba(15,77,168,0.4)")
            }
        }
        function mouseout() {
            let selected = d3.select(d3.event.currentTarget).attr("selected") === "true" ? true : false;
            if (!selected) {
                d3.select(d3.event.currentTarget).style("fill", "rgba(255,255,255,0.2)")
            }
        }
        this.tile
            .on("mouseover", mouseover)
            .on("mouseout", mouseout);
    }
}

export class Grid {
    public view: View;
    public rows: number;
    public columns: number;
    public coordinates: Coordinate[][];
    private _size: Size;
    private _spacing: Size;
    private _offset: Offset;
    private _xOffset: number;
    private _yOffset: number;
    constructor(public options: Options) {
        this.init();
        this.view = new View();
        this.view
            .createGrid(options.layer)
            .createRows(this.coordinates)
            .createColumns()
            .drawCoordinates()
            .generateLine()
            .generatePath(Tile.shape.outerRadius)
            .enableZoom()
            .addClick()
            .addOnHover();
    }
    public get size() {
        return this._size;
    }
    public get spacing() {
        return this._spacing;
    }
    public get offset() {
        return this._offset;
    }
    public init() {
        Tile.configure(this.options.tile);
        this._setSize();
        this._setOffset();
        this._setSpacing();
        if (this._offset === Offset.OddRow) {
            this._OddRow();
        }
        if (this._offset === Offset.None) {
            this._None();
        }
        if (this._offset === Offset.OddColumn) {
            this._OddColumn();
        }
        this._setColumns();
        this._setRows();
        this._generateCoordinates();
    }
    private _getQtyTiles = (size: number, spacing: number ) => Math.round(size / spacing);
    private _getViewport = () => ({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });

    private _setSize() {
        let viewport: Size = this._getViewport();
        let size: Size = {
            width: this.options.size.width || this._getViewport().width,
            height: this.options.size.height || this._getViewport().height,
        };
        this._size = this.options.size.fullscreen ? viewport : size;
    }
    private _setSpacing() {
        this._spacing = Tile.size;
    }
    /* TO DO: Investigate move of Offset to Tile */
    private _setOffset() {
        if (this.options.tile.type === Shapes.Hexagon) {
            if (this.options.tile.orientation === Orientation.Flat) {
                this._offset = Offset.OddColumn;
            }
            if (this.options.tile.orientation === Orientation.Sharp) {
                this._offset = Offset.OddRow;
            }
        }
        if (this.options.tile.type === Shapes.Square) {
            if (this.options.tile.orientation === Orientation.Flat) {
                this._offset = Offset.None;
            }
            if (this.options.tile.orientation === Orientation.Sharp) {
                this._offset = Offset.OddRow;
            }
        }
    }
    private _setColumns() {
        this.columns = this._getQtyTiles(this.size.width, this.spacing.width);
    }
    private _setRows() {
        this.rows = this._getQtyTiles(this.size.height, this.spacing.height);
    }
    private _generateCoordinates() {
        this.coordinates = [];
        for (let y = 0; y < this.rows; y++) {
            this.coordinates[y] = [];
            for (let x = 0; x < this.columns; x++) {
                this.coordinates[y][x] = this._getPosition({x: x, y: y});
            };
        };
    }
    private _isOdd = (value: number) => Math.abs(value % 2) == 1;
    private _OddRow = () => {
        this._spacing.height = this._spacing.height - (4 * (Hexagon.outerRadius- Hexagon.innerRadius)) + 2;
        this._spacing.width = this._spacing.width;
        this._xOffset = (this.spacing.width / 2) + 0.5;
        this._yOffset = 0; 
    }
    private _None = () => {
        this._xOffset = 0;
        this._yOffset = 0;
    }
    private _OddColumn = () => {
        this._spacing.width = this._spacing.width - (4 * (Hexagon.outerRadius- Hexagon.innerRadius));
        this._xOffset = 0;
        this._yOffset = this.spacing.height / 2;
    }
    private _getPosition = (coordinate: Coordinate) => ({
        x: this._addOrigin(coordinate).x + this._calcPosition(coordinate).x + this._addOffset(coordinate).x,
        y: this._addOrigin(coordinate).y + this._calcPosition(coordinate).y + this._addOffset(coordinate).y,
    })
    private _addOrigin = (coordinate: Coordinate) => ({
        x: this.spacing.width / 2 + coordinate.x,
        y: this.spacing.height / 2 + coordinate.y,
    })
    private _calcPosition = (coordinate: Coordinate) => ({
        x: coordinate.x * this.spacing.width,
        y: coordinate.y * this.spacing.height,
    })
    private _addOffset = (coordinate: Coordinate) => ({
        x: (this._isOdd(coordinate.y) ? this._xOffset : 0),
        y: (this._isOdd(coordinate.x) ? this._yOffset : 0),
    })
}
