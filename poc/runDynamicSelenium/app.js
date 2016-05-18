var executeString = "driver.get('http://www.google.com/ncr');\n"+
                    "driver.findElement(By.name('q')).sendKeys('webdriver');\n"+
                    "driver.findElement(By.name('btnG')).click();\n"+
                    "driver.wait(until.titleIs('webdriver - Google Search'), 10000);\n"+
                    "driver.quit();"


var webdriver = require('selenium-webdriver'),
                                                 By = webdriver.By,
                                                 until = webdriver.until;

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

    eval(executeString);


//driver.get('http://www.wingify.com');
/*driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 10000);
driver.quit();*/
