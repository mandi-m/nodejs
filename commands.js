const request = require('request');
var fs = require('fs');
const readline = require('readline');

var pwdFunction = function(cmdData){
  if (cmdData === 'pwd') {
    process.stdout.write(__dirname);
    process.stdout.write('\nprompt > ');
  }
};

var lsFunction = function(cmdData){
  if (cmdData === 'ls') {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });

  }
};

var catFunction = function(cmdData, fileName){
  if (cmdData === 'cat') {
    fs.readFile(fileName, function(err, data){
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    });
  }
};

var curlFunction = function(cmdData, website){
  if (cmdData === 'curl') {
    request(website, function(err, response, body){
      if(err) throw err;
      process.stdout.write(body);
      process.stdout.write('\nprompt > ');
    })
  }
};

// var headFunction = function(cmdData, fileName){
//   if (cmdData === 'head') {
//   //  var data = fs.readFileSync(fileName);
//     var newData = "";
//     for (var i = 0; i < 5; i++){
//       readline
//     }

//       process.stdout.write(data);
//       process.stdout.write('\nprompt > ');
//   }
// };



module.exports.pwdFunction = pwdFunction;
module.exports.lsFunction = lsFunction;
module.exports.catFunction = catFunction;
module.exports.curlFunction = curlFunction;
//module.exports.headFunction = headFunction;
