import { expect } from "../test/Unit/bootstrap.test";
import * as d3 from "d3";
// ***************************************************************************
// * Grid
// ***************************************************************************
import { Shapes, Orientation } from "../src/enums";
import { Grid, Options, View } from "../src/grid";
import { Tile } from "../src/tile";
import { Size, Coordinate } from "../src/interfaces";
import { isRegExp } from "util";
// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given new Grid()", () => {
   before( () => {
    this.layer = d3.select(document)
    .select("axiom-flow")
    .append("svg")
    .attr("width", 510)
    .attr("height", 510)
    .append("g")
    .attr("class", "layers");

    this.options = <Options>{
        layer: this.layer,
        size: {
            fullscreen: false,
            width: 510,
            height: 510,
        },
        slot: {
            type: Shapes.Square,
            orientation: Orientation.Flat,
            size: {
                width: 5,
                height: 5,
            },
        },
        tile: {
            type: Shapes.Square,
            orientation: Orientation.Flat,
            radius: 50,
        },
    };

    this.grid = new Grid(this.options);
   });
   describe("Given fullscreen set to true", () => {
        before( () => {
            this.options = <Options>{
                layer: this.layer,
                size: {
                    fullscreen: true,
                    width: 510,
                    height: 510,
                },
                slot: {
                    type: Shapes.Square,
                    orientation: Orientation.Flat,
                    size: {
                        width: 5,
                        height: 5,
                    },
                },
                tile: {
                    type: Shapes.Square,
                    orientation: Orientation.Flat,
                    radius: 100,
                },
            };

            this.grid = new Grid(this.options);
        });
        it("Then viewport.width should eql Grid.getViewportWidth()", async () => {
            expect(this.grid.size.width).is.eql(Grid.getViewportWidth());
        });
        it("Then viewport.height should eql Grid.getViewportHeight()", async () => {
            expect(this.grid.size.height).is.eql(Grid.getViewportHeight());
        });
   });
   describe("Given fullscreen set to false", () => {
        describe("Given options.size.width and options.size.height is defined", () => {
            before( () => {
                this.options = <Options>{
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 510,
                        height: 510,
                    },
                    slot: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        size: {
                            width: 5,
                            height: 5,
                        },
                    },
                    tile: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        radius: 100,
                    },
                };
    
                this.grid = new Grid(this.options);
            });
            it("Then viewport.width should eql options.size.width", async () => {
                expect(this.grid.size.width).is.eql(this.options.size.width);
            });
            it("Then viewport.height should eql options.size.height", async () => {
                expect(this.grid.size.height).is.eql(this.options.size.height);
            });
        });
        describe("Given options.size.width is undefined", () => {
            before( () => {
                this.options = <Options>{
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        height: 510,
                    },
                    slot: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        size: {
                            width: 5,
                            height: 5,
                        },
                    },
                    tile: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        radius: 100,
                    },
                };
    
                this.grid = new Grid(this.options);
            });
            it("Then viewport.width should eql Grid.getViewportwidth", async () => {
                expect(this.grid.size.width).is.eql(Grid.getViewportWidth());
            });
            it("Then viewport.height should eql options.size.height", async () => {
                expect(this.grid.size.height).is.eql(this.options.size.height);
            });
        });
        describe("Given options.size.height is undefined", () => {
            before( () => {
                this.options = <Options>{
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 510,
                    },
                    slot: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        size: {
                            width: 5,
                            height: 5,
                        },
                    },
                    tile: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        radius: 100,
                    },
                };
    
                this.grid = new Grid(this.options);
            });
            it("Then viewport.width should eql options.size.width", async () => {
                expect(this.grid.size.width).is.eql(this.options.size.width);
            });
            it("Then viewport.height should eql Grid.getViewportHeight", async () => {
                expect(this.grid.size.height).is.eql(Grid.getViewportHeight());
            });
        });
   });
   it("Then grid should have a spacing property", () => {
       expect(this.grid.spacing).to.not.undefined;
   });
   it("Then grid should have a offset property", () => {
       expect(this.grid.offset).to.not.undefined;
   });
   it("Then grid should have a size property", () => {
       expect(this.grid.size).to.not.undefined;
   })
   it("Then grid.colums should eql Grid.calcMax(grid.viewport.width, grid.spacing.with)", () => {
    let columns = Grid.calcMax(this.grid.size.width, this.grid.spacing.width);
    expect(this.grid.columns).is.eql(columns);
   });
   it("Then grid.rows should eql Grid.calcMax(grid.viewport.height, grid.spacing.height)", () => {
    let rows = Grid.calcMax(this.grid.size.height, this.grid.spacing.height); 
    expect(this.grid.rows).is.eql(rows);
   });
   describe("Given tile.type set to Shapes.Square" , () => {
        describe("Given tile.orientation set to Orientation.Flat", () => {
            before( () => {
                this.options = <Options>{
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 510,
                        height: 510,
                    },
                    slot: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        size: {
                            width: 5,
                            height: 5,
                        },
                    },
                    tile: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        radius: 50,
                    },
                };

                this.grid = new Grid(this.options);
            });
            it("Then grid.spacing.width should eql Tile.getSize(options.tile).width", async () => {
                let width = Tile.getSize(this.options.tile).width;
                expect(this.grid.spacing.width).is.eql(width);
            });
            it("Then grid.spacing.height should eql Tile.getSize(options.tile).height", async () => {
                let height = Tile.getSize(this.options.tile).height;
                expect(this.grid.spacing.height).is.eql(height);
            });
            it("Then grid.offset should eql Tile.getOffset(options)", async () => {
                expect(this.grid.offset).is.eql(Tile.getOffset(this.options.tile));
            });
        });
        describe("Given tile.orientation set to Orientation.Sharp", () => {
            before( () => {
                this.options = <Options>{
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 510,
                        height: 510,
                    },
                    slot: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        size: {
                            width: 5,
                            height: 5,
                        },
                    },
                    tile: {
                        type: Shapes.Square,
                        orientation: Orientation.Sharp,
                        radius: 50,
                    },
                };

                this.grid = new Grid(this.options);
            });
            it("Then spacing.width should eql Tile.getSize(options.tile).width", async () => {
                let width = Tile.getSize(this.options.tile).width;
                expect(this.grid.spacing.width).is.eql(width);
            });
            it("Then spacing.height should eql Tile.getSize(options.tile).height", async () => {
                let height = Tile.getSize(this.options.tile).height;
                expect(this.grid.spacing.height).is.eql(height);
            });
            it("Then offset should eql Tile.getOffset(options.tile)", async () => {
                expect(this.grid.offset).is.eql(Tile.getOffset(this.options.tile));
            });
        });
   });
   describe("Given tile.type set to Shapes.Hexagon" , () => {
        describe("Given tile.orientation set to Orientation.Flat", () => {
            before( () => {
                this.options = <Options>{
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 510,
                        height: 510,
                    },
                    slot: {
                        type: Shapes.Hexagon,
                        orientation: Orientation.Flat,
                        size: {
                            width: 5,
                            height: 5,
                        },
                    },
                    tile: {
                        type: Shapes.Hexagon,
                        orientation: Orientation.Flat,
                        radius: 50,
                    },
                };

                this.grid = new Grid(this.options);
            });
            it("Then grid.spacing.width should eql Tile.getSize(options.tile).width", async () => {
                let width = Tile.getSize(this.options.tile).width;
                expect(this.grid.spacing.width).is.eql(width);
            });
            it("Then grid.spacing.height should eql Tile.getSize(options.tile).height", async () => {
                let height = Tile.getSize(this.options.tile).height;
                expect(this.grid.spacing.height).is.eql(height);
            });
            it("Then offset should eql Tile.getOffset(options)", async () => {
                expect(this.grid.offset).is.eql(Tile.getOffset(this.options.tile));
            });
        });
        describe("Given tile.orientation set to Orientation.Sharp", () => {
            before( () => {
                this.options = <Options>{
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 510,
                        height: 510,
                    },
                    slot: {
                        type: Shapes.Hexagon,
                        orientation: Orientation.Sharp,
                        size: {
                            width: 5,
                            height: 5,
                        },
                    },
                    tile: {
                        type: Shapes.Hexagon,
                        orientation: Orientation.Sharp,
                        radius: 50,
                    },
                };

                this.grid = new Grid(this.options);
            });
            it("Then grid.spacing.width should eql Tile.getSize(options.tile).width", async () => {
                let width = Tile.getSize(this.options.tile).width;
                expect(this.grid.spacing.width).is.eql(width);
            });
            it("Then grid.spacing.height should eql Tile.getSize(options.tile).height", async () => {
                let height =  Tile.getSize(this.options.tile).height;
                expect(this.grid.spacing.height).is.eql(height);
            });
            it("Then offset should eqlTile.getOffset(options)", async () => {
                expect(this.grid.offset).is.eql(Tile.getOffset(this.options.tile));
            });
        });
   });
});
describe("Given Grid", () => {
    describe("When calcMax(spacing, size)", () => {
        it("Then round(size / spacing) should be returned", () => {
            let size: number = 510;
            let spacing: number = 50;
            let max: number = Math.round(size / spacing); 
            expect(Grid.calcMax(size, spacing)).is.eql(max);
        });
    });
    describe("When createAxis(size)" , () => {
        it("Then an Array<number> should be returned with len eql to size", () => {
            let size = 10
            let axis = Grid.createAxis(size)
            expect(axis.length).is.eql(size);
        });
    });
    describe("When getViewportWidth()", () => {
        it("Then width should eql document.documentElement.clientWidth", () => {
            expect(Grid.getViewportWidth()).is.eql(document.documentElement.clientWidth);
        });
    });
    describe("When getViewportHeight()", () => {
        it("Then height should eql document.documentElement.clientHeight", () => {
            expect(Grid.getViewportHeight()).is.eql(document.documentElement.clientHeight);
        });
    });
});
describe("Given new View()", () => {
    before( () => {
        this.layer = d3.select(document)
        .select("axiom-flow")
        .append("svg")
        .attr("width", 510)
        .attr("height", 510)
        .append("g")
        .attr("class", "layers");

        this.view = new View();
    });
    describe("When createGrid()", () => {
        before(()=> {
            this.view.createGrid(this.layer);
        })
        it("Then a first child element should have class eql to grid", () => {
            let grid = this.layer.select(":first-child");
            expect(grid.attr("class")).is.eql("grid");
        });
        describe("Given an element with class eql to grid exist", () => {
            before(() => {
                this.columns = 5
                this.rows = 5
                this.coordinates = [];
                for (let y = 0; y < this.rows; y++) {
                    this.coordinates[y] = [];
                    for (let x = 0; x < this.columns; x++) {
                        this.coordinates[y][x] = {
                            x: x,
                            y: y,
                        };
                    }
                }
                this.view.createGrid(this.layer);
            });
            it("When createRows(coordinates) then the row elements should eql coordinates.length", () => {
                this.view.createRows(this.coordinates);
                expect(this.view.rows.size()).is.eql(this.coordinates.length);
            });
            it("When createColumns() then the number of column should eql coordinates[0].length", () => {
                this.view.createGrid(this.layer)
                         .createRows(this.coordinates)
                         .createColumns();
                let size = this.coordinates.length * this.coordinates[0].length;
                expect(this.view.columns.size()).is.eql(size);
            });
        });
    });  
});