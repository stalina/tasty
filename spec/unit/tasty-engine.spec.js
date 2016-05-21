var tasty = require('../../app/tasty-engine.js');
var webdriver = require('selenium-webdriver');
driver = new webdriver.Builder().
forBrowser('phantomjs').
build();
describe("Tasty Engine", function() {

    beforeEach(function() {
        tasty.setDriver(driver);
    });

    it("GOTO go to the url", function() {
        spyOn(driver, "get");
        tasty.execute("GO_TO('http://www.google.fr');");
        expect(driver.get).toHaveBeenCalledWith('http://www.google.fr');
    });
});