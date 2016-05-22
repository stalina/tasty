
exports.addPluginFile=function(){

};

exports.getTastyCode=function(){
    return {'go to $url' : ['driver.get($url)']};
};

exports.toSeleniumCode=function(tastyScript){
    return 'driver.get("http://www.google.fr")';
};