// tslint:disable-next-line:no-unused-variable
import { expect, sinon } from "./bootstrap.test";
import * as d3 from "d3";
// ***************************************************************************
// * Shape
// ***************************************************************************
import { Grid, Options } from "../../src/grid";
import { Orientation, Shapes, Offset } from "../../src/enums";
// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given Grid", () => {
    before(() => {
        this.layer = d3
            .select(document)
            .select("axiom-flow")
            .append("svg")
            .attr("width", 510)
            .attr("height", 510)
            .append("g")
            .attr("class", "layers");
    });
    describe("Given new Grid()", () => {
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
        })
        it("Then grid should contain property rows", () => {
            expect(this.grid.rows).to.not.undefined;
        });
        it("Then grid should contain property columns", () => {
            expect(this.grid.columns).to.not.undefined;
        });
        it("Then grid should contain property coordinates", () => {
            expect(this.grid.coordinates).to.not.undefined;
        });
        it("Then grid should have a spacing property", () => {
            expect(this.grid.spacing).to.not.undefined;
        });
        it("Then grid should have a size property", () => {
            expect(this.grid.size).to.not.undefined;
        })
        it("Then grid should have a offset property", () => {
            expect(this.grid.offset).to.not.undefined;
        })
    })
    describe("Given new Grid() with fullscreen set to true", () => {
        before( () => {
            this.options = {
                layer: this.layer,
                size: {
                    fullscreen: true
                },
                tile: {
                    type: Shapes.Square,
                    orientation: Orientation.Flat,
                    radius: 100,
                },
            };

            this.grid = new Grid(this.options);
        });
        it("Then size.width should eql Grid.getViewportWidth()", async () => {
            expect(this.grid.size.width).is.eql(document.documentElement.clientWidth);
        });
        it("Then size.height should eql Grid.getViewportHeight()", async () => {
            expect(this.grid.size.height).is.eql(document.documentElement.clientHeight);
        });
    });
    describe("Given new Grid() with fullscreen set to false", () => {
        before( () => {
            this.options = {
            layer: this.layer,
            size: {
                fullscreen: false,
                width: 500,
                height: 500
            },
            tile: {
                type: Shapes.Square,
                orientation: Orientation.Flat,
                radius: 100,
            },
            };

            this.grid = new Grid(this.options);
        });
        it("Then size.width should eql options.size.width", async () => {
            expect(this.grid.size.width).is.eql(this.options.size.width);
        });
        it("Then size.height should eql options.size.height", async () => {
            expect(this.grid.size.height).is.eql(this.options.size.height);
        });
    });
    describe("Given new Grid() with tile.type set to Shapes.Sqaure", () => {
        describe("And with tile.orientation set to Orientation.Flat", () => {
            before( () => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: Shapes.Square,
                        orientation: Orientation.Flat,
                        radius: 100,
                    },
                };
    
                this.grid = new Grid(this.options);
            });
            it("Then offset should eql Offset.Oddrow", async () => {
                expect(this.grid.offset).is.eql(Offset.None);
            });
        });
        describe("And with tile.orientation set to Orientation.Sharp", () => {
            before( () => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: Shapes.Square,
                        orientation: Orientation.Sharp,
                        radius: 100,
                    },
                };
    
                this.grid = new Grid(this.options);
            });
            it("Then offset should eql Offset.Oddrow", async () => {
                expect(this.grid.offset).is.eql(Offset.OddRow);
            });
        });
    });
    describe("Given new Grid() with tile.type set to Shapes.Hexagon", () => {
        describe("And with tile.orientation set to Orientation.Flat", () => {
            before( () => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: Shapes.Hexagon,
                        orientation: Orientation.Flat,
                        radius: 100,
                    },
                };
    
                this.grid = new Grid(this.options);
            });
            it("Then offset should eql Offset.OddColumn", async () => {
                expect(this.grid.offset).is.eql(Offset.OddColumn);
            });
        });
        describe("And with tile.orientation set to Orientation.Sharp", () => {
            before( () => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: Shapes.Hexagon,
                        orientation: Orientation.Sharp,
                        radius: 100,
                    },
                };
    
                this.grid = new Grid(this.options);
            });
            it("Then offset should eql Offset.OddRow", async () => {
                expect(this.grid.offset).is.eql(Offset.OddRow);
            });
        });
    });
});
