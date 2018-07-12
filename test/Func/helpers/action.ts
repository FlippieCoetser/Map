export default class Action {
    public static ClickButton() {
        browser.click("#trigger");
    }
    /**
    * Open the given URL
    * @param  {String}   type Type of navigation (url or site)
    * @param  {String}   page The URL to navigate to
    */
    public static Open(type: string, page: string) {
        const url = (type === "url") ? page : browser.options.baseUrl + page;
        browser.url(url);
    };
}
