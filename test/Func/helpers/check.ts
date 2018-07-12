import  {expect} from "chai";

export default class Check {
    public static correctLabel() {
        let label = browser.getText("#label");
        expect(label).to.eql("message");
    }

    public static noMessage() {
        let label = browser.getText("#label");
        expect(label).to.eql("");
    }
}
