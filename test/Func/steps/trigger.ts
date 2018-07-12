import { cucumber, given, when, then } from "cucumber.decorators";
import Action from "../helpers/action";
import Check from "../helpers/check";

@cucumber
class Trigger {
    @given(/^I open the (url|site) "([^"]*)?"$/)
    public openWebsite(type: string, page: string) {
        return Action.Open(type, page);
    };

    @given(/^a label with id "label" to be empty$/)
    public noMessage() {
        return Check.noMessage();
    }

    @when(/^I click on a button with id "trigger"$/)
    public clickButton() {
        return Action.ClickButton();
    }

    @then(/^I expect a label with id "label" to be "message"$/)
    public correctLabel() {
        return Check.correctLabel();
    }
};

let trigger = new Trigger();
