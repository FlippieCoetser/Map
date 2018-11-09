"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_test_1 = require("./bootstrap.test");
// ***************************************************************************
// * Event Library
// ***************************************************************************
const events_1 = require("../../src/events");
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given: Event", () => {
    it("When addListener(eventName, listener) then listeners(eventName) should eql listener", () => {
        let event = new events_1.Event();
        let listener = bootstrap_test_1.sinon.spy();
        let eventName = "eventName";
        event.addListener(eventName, listener);
        bootstrap_test_1.expect(event.listeners(eventName).length).eql(1);
        bootstrap_test_1.expect(event.listeners(eventName)[0]).eql(listener);
    });
    it("When Event available then defaultMaxListeners should be eql 10", () => {
        bootstrap_test_1.expect(events_1.Event.defaultMaxListeners).eql(10);
    });
    it("When setMaxListeners(limit) then getMaxListeners() should eql to limit", () => {
        let event = new events_1.Event();
        let Limit = 5;
        event.setMaxListeners(Limit);
        bootstrap_test_1.expect(event.getMaxListeners()).eql(Limit);
    });
    it("When setMaxListeners(limit) then instanceof should eql Event", () => {
        let event = new events_1.Event();
        bootstrap_test_1.expect(event.setMaxListeners(5) instanceof events_1.Event).eql(true);
    });
    it("When listeners(eventName) after on(eventName, Listener) then listernerCount should eql ++ previous listernerCount", () => {
        let event = new events_1.Event();
        let listener = bootstrap_test_1.sinon.spy();
        let eventName = "eventName";
        bootstrap_test_1.expect(event.listenerCount(eventName)).eql(0);
        event.on(eventName, listener);
        bootstrap_test_1.expect(event.listenerCount(eventName)).eql(1);
    });
    describe("Given: on(eventName, listener)", () => {
        it("When calling listeners(eventName) then listners[0] should eql listener", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            event.on(eventName, listener);
            bootstrap_test_1.expect(event.listeners(eventName).length).eql(1);
            bootstrap_test_1.expect(event.listeners(eventName)[0]).eql(listener);
        });
        it("When emit(eventName) then emit should eql true", () => {
            let event = new events_1.Event();
            let listener = () => null;
            let eventName = "eventName";
            event.on(eventName, listener);
            bootstrap_test_1.expect(event.emit(eventName)).eql(true);
        });
        it("When emit(eventName) then listener should be called", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            event.on(eventName, listener);
            event.emit(eventName);
            bootstrap_test_1.expect(listener).to.have.been.calledOnce;
        });
        it("When emit(eventName, arg) then listener should be called with arg", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            let arg = "agr";
            event.on(eventName, listener);
            event.emit(eventName, arg);
            bootstrap_test_1.expect(listener).to.have.been.calledOnce;
            bootstrap_test_1.expect(listener).to.have.been.calledWith(arg);
        });
        it("When on(eventName, listener2) and emit(eventName) then listener1() and listener2() should be called ", () => {
            let event = new events_1.Event();
            let listenerOne = bootstrap_test_1.sinon.spy();
            let listenerTwo = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            event.on(eventName, listenerOne);
            event.on(eventName, listenerTwo);
            event.emit(eventName);
            bootstrap_test_1.expect(listenerTwo).to.have.been.called;
            bootstrap_test_1.expect(listenerOne).to.have.been.called;
        });
        it("When eventNames() then eventNames should eql [eventName]", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            bootstrap_test_1.expect(event.eventNames()).eql([]);
            event.on(eventName, listener);
            bootstrap_test_1.expect(event.eventNames()).eql([eventName]);
        });
        it("When listeners(eventName) then listners should eql [listener]", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            event.on(eventName, listener);
            bootstrap_test_1.expect(event.listeners(eventName)[0]).eql(listener);
        });
        it("When removeAllListeners() then listeners should eql 0", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            event.on(eventName, listener);
            bootstrap_test_1.expect(event.eventNames().length).eql(1);
            event.removeAllListeners();
            bootstrap_test_1.expect(event.eventNames().length).eql(0);
        });
        it("When removeAllListeners([eventName]) then listners should not contain eventName", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let listener2 = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            let eventName2 = "eventName2";
            event.on(eventName, listener);
            event.on(eventName2, listener2);
            bootstrap_test_1.expect(event.eventNames().length).eql(2);
            event.removeAllListeners([eventName]);
            bootstrap_test_1.expect(event.eventNames().length).eql(1);
        });
        describe("Given: on(eventName1, listener)", () => {
            it("When removeListener(eventName, listener) then listnerCount(eventName) should eql 1", () => {
                let event = new events_1.Event();
                let listenerOne = bootstrap_test_1.sinon.spy();
                let listenerTwo = bootstrap_test_1.sinon.spy();
                let eventName = "eventName";
                event.on(eventName, listenerOne);
                event.on(eventName, listenerTwo);
                bootstrap_test_1.expect(event.listenerCount(eventName)).eql(2);
                event.removeListener(eventName, listenerOne);
                bootstrap_test_1.expect(event.listenerCount(eventName)).eql(1);
            });
            it("When removeAllListeners([eventNames]) then event.eventNames should eql 0", () => {
                let event = new events_1.Event();
                let listener = bootstrap_test_1.sinon.spy();
                let eventName = "eventName";
                let eventNameTwo = "eventNameTwo";
                event.on(eventName, listener);
                event.on(eventNameTwo, listener);
                bootstrap_test_1.expect(event.eventNames().length).eql(2);
                event.removeAllListeners(["eventName", "eventNameTwo"]);
                bootstrap_test_1.expect(event.eventNames().length).eql(0);
            });
        });
    });
    describe("Given: on(eventName, listener)!", () => {
        it("When emit(eventName) then emit should eql false", () => {
            let event = new events_1.Event();
            let eventName = "eventName";
            bootstrap_test_1.expect(event.emit(eventName)).eql(false);
        });
    });
    describe("Given: once(eventName, listener)", () => {
        it("When emit(eventName, arg) then listener should be called with arg", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            let arg = "agr";
            event.once(eventName, listener);
            event.emit(eventName, arg);
            bootstrap_test_1.expect(listener).to.have.been.calledOnce;
            bootstrap_test_1.expect(listener).to.have.been.calledWith(arg);
        });
        it("When emit(eventName) and emit(eventName) then listener() should be called once", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            event.once(eventName, listener);
            event.emit(eventName);
            event.emit(eventName);
            bootstrap_test_1.expect(listener).to.have.been.calledOnce;
        });
        it("When on(eventName2, listener2) and emit(eventName) and emit(eventName2) then listener2() should be called", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            let listener2 = bootstrap_test_1.sinon.spy();
            let eventName2 = "eventName2";
            event.once(eventName, listener);
            event.on(eventName2, listener2);
            event.emit(eventName);
            event.emit(eventName2);
            bootstrap_test_1.expect(listener2).to.have.been.calledOnce;
        });
        it("When on(eventName2, listener2) and emit(eventName) and emit(eventName2) then listener() should be called", () => {
            let event = new events_1.Event();
            let listener = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            let listener2 = bootstrap_test_1.sinon.spy();
            let eventName2 = "eventName2";
            event.once(eventName, listener);
            event.on(eventName2, listener2);
            event.emit(eventName);
            event.emit(eventName2);
            bootstrap_test_1.expect(listener).to.have.been.calledOnce;
        });
    });
    describe("Given: setMaxListners(limit)!", () => {
        it("When getMaxListeners() then getMaxListeners should eql 10", () => {
            let event = new events_1.Event();
            let Limit = events_1.Event.defaultMaxListeners;
            bootstrap_test_1.expect(event.getMaxListeners()).eql(Limit);
        });
    });
    describe("Given: setMaxListeners(1)", () => {
        it("When on(eventName, listener) and on(eventName1, listener) then listenerCount(eventName) should return 1", () => {
            let event = new events_1.Event();
            event.setMaxListeners(1);
            let listenerOne = bootstrap_test_1.sinon.spy();
            let listenerTwo = bootstrap_test_1.sinon.spy();
            let eventName = "eventName";
            event.on(eventName, listenerOne);
            event.on(eventName, listenerTwo);
            bootstrap_test_1.expect(event.listenerCount(eventName)).eql(1);
        });
    });
});
//# sourceMappingURL=events.test.js.map