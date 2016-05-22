var analyser = require('../../app/tasty-analyser.js');

describe("Tasty Analyser", function() {

    beforeEach(function() {
        analyser.addPluginFile('../../plugin/common-instructions.tty');
    });

    it("Add tasty code file as plugin", function() {
        expect(analyser.getTastyCode()['go to $url'][0]).toBe('driver.get($url)');
    });

    it("Translate tasty code to selenium code", function() {
        var toSeleniumCode = analyser.toSeleniumCode("go to http://www.google.fr");
        expect(toSeleniumCode).toBe('driver.get("http://www.google.fr")');
    });
});