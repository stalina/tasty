var webdriver = require('selenium-webdriver'),
     By = webdriver.By,
     until = webdriver.until;

var driver;

exports.start = function start() {
    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
};

exports.stop = function stop() {
    driver.quit();
};

exports.execute = function execute(codeToExecute) {
    eval(codeToExecute);
};

    //eval(executeString);


//driver.get('http://www.wingify.com');
/*driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 10000);
driver.quit();*/
