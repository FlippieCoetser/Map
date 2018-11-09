"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_test_1 = require("./bootstrap.test");
// ***************************************************************************
// * Dictionary
// ***************************************************************************
const dictionary_1 = require("../../src/dictionary");
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Dictionary<T>", () => {
    it("When Add(key, value) then ContainsKey(key) should eql true", () => {
        let dictionary = new dictionary_1.Dictionary();
        dictionary.Add("john", "doe");
        let john = dictionary.ContainsKey("john");
        bootstrap_test_1.expect(john).eql(true);
    });
    it("when Add(key, value) then Item(key) should eql value", () => {
        let dictionary = new dictionary_1.Dictionary();
        dictionary.Add("john", "doe");
        let doe = dictionary.Item("john");
        bootstrap_test_1.expect(doe).eql("doe");
    });
    it("When Add(key, value)! then Item(key) should eql undefined", () => {
        let dictionary = new dictionary_1.Dictionary();
        let doe = dictionary.Item("john");
        bootstrap_test_1.expect(doe).eql(undefined);
    });
    describe("Given Add(key, value)", () => {
        it("when Add(key, value) then count() should eql 2", () => {
            let dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            let count = dictionary.Count();
            bootstrap_test_1.expect(count).eql(2);
        });
        it("When Add(key, value) then Keys() should eql to [key]", () => {
            let dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            let keys = dictionary.Keys();
            bootstrap_test_1.expect(keys).eql(["john", "john2"]);
        });
        it("When Add(key,value) then Values() should eql [values]", () => {
            let dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            let values = dictionary.Values();
            bootstrap_test_1.expect(values).eql(["doe", "doe2"]);
        });
        it("When Remove(key) then count() should eql 1", () => {
            let dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            let count = dictionary.Count();
            bootstrap_test_1.expect(count).eql(2);
            dictionary.Remove("john2");
            let count2 = dictionary.Count();
            bootstrap_test_1.expect(count2).eql(1);
        });
    });
});
//# sourceMappingURL=dictionary.test.js.map