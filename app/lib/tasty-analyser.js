var fs = require('fs');
var tastyCode = [];

exports.addPluginFile=function(filePath, callback){
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }else {
        tastyCode = _extractTastyCode(data.split('\n'));
      }
      callback();
    });
};

exports.getTastyCode=function(){
    return tastyCode;
};

exports.toSeleniumCode=function(tastyScript){
    return 'driver.get("http://www.google.fr")';
};

_extractTastyCode=function(fileLines){
    var instructions = [];

    var currentInstruction;
    var currentParameters;
    var currentCodeLines = [];

    for(var i=0;i<fileLines.length;i++){
        var line = fileLines[i].trim();

        if(line.endsWith('{')){
            currentInstruction = line.substring(0, line.length-1).trim();
            currentParameters = currentInstruction.match(/\$\w*/gi);
            currentCodeLines = [];
        }else if(line.startsWith('}')){
            instructions[currentInstruction] = {
                'parameters' : currentParameters,
                'codeLines'  : currentCodeLines
            };
        }else {
            currentCodeLines.push(line);
        }
    }
    return instructions;
};