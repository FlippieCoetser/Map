"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
const bootstrap_test_1 = require("./bootstrap.test");
const d3 = require("d3");
// ***************************************************************************
// * Shape
// ***************************************************************************
const grid_1 = require("../../src/grid");
const enums_1 = require("../../src/enums");
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
        before(() => {
            this.options = {
                layer: this.layer,
                size: {
                    fullscreen: false,
                    width: 510,
                    height: 510,
                },
                slot: {
                    type: enums_1.Shapes.Square,
                    orientation: enums_1.Orientation.Flat,
                    size: {
                        width: 5,
                        height: 5,
                    },
                },
                tile: {
                    type: enums_1.Shapes.Square,
                    orientation: enums_1.Orientation.Flat,
                    radius: 50,
                },
            };
            this.grid = new grid_1.Grid(this.options);
        });
        it("Then grid should contain property rows", () => {
            bootstrap_test_1.expect(this.grid.rows).to.not.undefined;
        });
        it("Then grid should contain property columns", () => {
            bootstrap_test_1.expect(this.grid.columns).to.not.undefined;
        });
        it("Then grid should contain property coordinates", () => {
            bootstrap_test_1.expect(this.grid.coordinates).to.not.undefined;
        });
        it("Then grid should have a spacing property", () => {
            bootstrap_test_1.expect(this.grid.spacing).to.not.undefined;
        });
        it("Then grid should have a size property", () => {
            bootstrap_test_1.expect(this.grid.size).to.not.undefined;
        });
        it("Then grid should have a offset property", () => {
            bootstrap_test_1.expect(this.grid.offset).to.not.undefined;
        });
    });
    describe("Given new Grid() with fullscreen set to true", () => {
        before(() => {
            this.options = {
                layer: this.layer,
                size: {
                    fullscreen: true
                },
                tile: {
                    type: enums_1.Shapes.Square,
                    orientation: enums_1.Orientation.Flat,
                    radius: 100,
                },
            };
            this.grid = new grid_1.Grid(this.options);
        });
        it("Then size.width should eql Grid.getViewportWidth()", () => __awaiter(this, void 0, void 0, function* () {
            bootstrap_test_1.expect(this.grid.size.width).is.eql(document.documentElement.clientWidth);
        }));
        it("Then size.height should eql Grid.getViewportHeight()", () => __awaiter(this, void 0, void 0, function* () {
            bootstrap_test_1.expect(this.grid.size.height).is.eql(document.documentElement.clientHeight);
        }));
    });
    describe("Given new Grid() with fullscreen set to false", () => {
        before(() => {
            this.options = {
                layer: this.layer,
                size: {
                    fullscreen: false,
                    width: 500,
                    height: 500
                },
                tile: {
                    type: enums_1.Shapes.Square,
                    orientation: enums_1.Orientation.Flat,
                    radius: 100,
                },
            };
            this.grid = new grid_1.Grid(this.options);
        });
        it("Then size.width should eql options.size.width", () => __awaiter(this, void 0, void 0, function* () {
            bootstrap_test_1.expect(this.grid.size.width).is.eql(this.options.size.width);
        }));
        it("Then size.height should eql options.size.height", () => __awaiter(this, void 0, void 0, function* () {
            bootstrap_test_1.expect(this.grid.size.height).is.eql(this.options.size.height);
        }));
    });
    describe("Given new Grid() with tile.type set to Shapes.Sqaure", () => {
        describe("And with tile.orientation set to Orientation.Flat", () => {
            before(() => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: enums_1.Shapes.Square,
                        orientation: enums_1.Orientation.Flat,
                        radius: 100,
                    },
                };
                this.grid = new grid_1.Grid(this.options);
            });
            it("Then offset should eql Offset.Oddrow", () => __awaiter(this, void 0, void 0, function* () {
                bootstrap_test_1.expect(this.grid.offset).is.eql(enums_1.Offset.None);
            }));
        });
        describe("And with tile.orientation set to Orientation.Sharp", () => {
            before(() => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: enums_1.Shapes.Square,
                        orientation: enums_1.Orientation.Sharp,
                        radius: 100,
                    },
                };
                this.grid = new grid_1.Grid(this.options);
            });
            it("Then offset should eql Offset.Oddrow", () => __awaiter(this, void 0, void 0, function* () {
                bootstrap_test_1.expect(this.grid.offset).is.eql(enums_1.Offset.OddRow);
            }));
        });
    });
    describe("Given new Grid() with tile.type set to Shapes.Hexagon", () => {
        describe("And with tile.orientation set to Orientation.Flat", () => {
            before(() => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: enums_1.Shapes.Hexagon,
                        orientation: enums_1.Orientation.Flat,
                        radius: 100,
                    },
                };
                this.grid = new grid_1.Grid(this.options);
            });
            it("Then offset should eql Offset.OddColumn", () => __awaiter(this, void 0, void 0, function* () {
                bootstrap_test_1.expect(this.grid.offset).is.eql(enums_1.Offset.OddColumn);
            }));
        });
        describe("And with tile.orientation set to Orientation.Sharp", () => {
            before(() => {
                this.options = {
                    layer: this.layer,
                    size: {
                        fullscreen: false,
                        width: 500,
                        height: 500
                    },
                    tile: {
                        type: enums_1.Shapes.Hexagon,
                        orientation: enums_1.Orientation.Sharp,
                        radius: 100,
                    },
                };
                this.grid = new grid_1.Grid(this.options);
            });
            it("Then offset should eql Offset.OddRow", () => __awaiter(this, void 0, void 0, function* () {
                bootstrap_test_1.expect(this.grid.offset).is.eql(enums_1.Offset.OddRow);
            }));
        });
    });
});
//# sourceMappingURL=grid.test.js.map