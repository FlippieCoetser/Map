"use strict";
exports.__esModule = true;
var bootstrap_test_1 = require("./bootstrap.test");
// ***************************************************************************
// * Dictionary
// ***************************************************************************
var dictionary_1 = require("../../src/dictionary");
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Dictionary<T>", function () {
    it("When Add(key, value) then ContainsKey(key) should eql true", function () {
        var dictionary = new dictionary_1.Dictionary();
        dictionary.Add("john", "doe");
        var john = dictionary.ContainsKey("john");
        bootstrap_test_1.expect(john).eql(true);
    });
    it("when Add(key, value) then Item(key) should eql value", function () {
        var dictionary = new dictionary_1.Dictionary();
        dictionary.Add("john", "doe");
        var doe = dictionary.Item("john");
        bootstrap_test_1.expect(doe).eql("doe");
    });
    it("When Add(key, value)! then Item(key) should eql undefined", function () {
        var dictionary = new dictionary_1.Dictionary();
        var doe = dictionary.Item("john");
        bootstrap_test_1.expect(doe).eql(undefined);
    });
    describe("Given Add(key, value)", function () {
        it("when Add(key, value) then count() should eql 2", function () {
            var dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            var count = dictionary.Count();
            bootstrap_test_1.expect(count).eql(2);
        });
        it("When Add(key, value) then Keys() should eql to [key]", function () {
            var dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            var keys = dictionary.Keys();
            bootstrap_test_1.expect(keys).eql(["john", "john2"]);
        });
        it("When Add(key,value) then Values() should eql [values]", function () {
            var dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            var values = dictionary.Values();
            bootstrap_test_1.expect(values).eql(["doe", "doe2"]);
        });
        it("When Remove(key) then count() should eql 1", function () {
            var dictionary = new dictionary_1.Dictionary();
            dictionary.Add("john", "doe");
            dictionary.Add("john2", "doe2");
            var count = dictionary.Count();
            bootstrap_test_1.expect(count).eql(2);
            dictionary.Remove("john2");
            var count2 = dictionary.Count();
            bootstrap_test_1.expect(count2).eql(1);
        });
    });
});
//# sourceMappingURL=dictionary.test.js.map