var tasty = require('../../../app/lib/tastyEngine.js');
describe("Tasty Engine", function() {

    beforeEach(function() {
        tasty.init('phantomjs');
    });

    it("GOTO go to the url", function() {
        var driver = tasty.getDriver();
        spyOn(driver, "get");
        tasty.execute("driver.get('http://www.google.fr');");
        expect(driver.get).toHaveBeenCalledWith('http://www.google.fr');
    });
});