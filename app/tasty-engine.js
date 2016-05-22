require('chromedriver');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    driver;

exports.getDriver=function(){
    return driver;
};

exports.init = function init(browser) {
    console.log('init');
    driver = new webdriver.Builder().
    forBrowser(browser).
    build();
};

exports.stop = function stop() {
    driver.quit();
};

exports.execute = function execute(codeToExecute) {
    try {
        eval(codeToExecute);
    }
    catch (exception) {
        console.log(exception.message);
    }
};

function GO_TO(url){
    driver.get(url);
}

function CLICK_OF(field){
    driver.findElement(By.name(field)).click();
}

function WRITE_INTO(text,field){
    driver.findElement(By.name(field)).sendKeys(text);
}

function VERIFIY_TITLE(title){
    driver.wait(until.titleIs(title), 10000).catch(function(exception) {
        alert(exception.message);
    });
}
