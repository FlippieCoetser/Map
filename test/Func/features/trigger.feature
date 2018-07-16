Feature: Local server test
    As a user
    when I fire a trigger
    I want a message to appear
    so that I am able to confirm typescript.events works in the browser

    Background:
        Given I open the url "http://127.0.0.1:5500/demo/"
        And a label with id "label" to be empty

    Scenario: Check trigger
        When I click on a button with id "trigger"
        Then I expect a label with id "label" to be "message"
