//console.log(process);
// console.log(Object.keys(process));
//var date = Date();
// console.log(date);


const commands = require('./commands');
pwdFunction = commands.pwdFunction;
lsFunction = commands.lsFunction;
catFunction = commands.catFunction;
curlFunction = commands.curlFunction;
var done = function(output) {
  // show the output
  // show the prompt
}

//headFunction = commands.headFunction;

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  //data: pwd
  //data: cat bash.js
  var split = data.indexOf(" ");
  var cmd = data.slice(0,split).toString().trim();
  var fileName = data.slice(split+1).toString().trim();
//  var cmd = data.toString().trim(); // remove the newline
  if (cmd === 'date'){
  process.stdout.write(Date());
  process.stdout.write('\nprompt > ');
}
  pwdFunction(cmd);
  lsFunction(cmd);
  catFunction(cmd, fileName);
  curlFunction(cmd, fileName);
 // headFunction(cmd, fileName);


  if (cmd.slice(0,4) === 'echo'){
    process.stdout.write(cmd.slice(5));
    process.stdout.write('\nprompt > ');
  }
});
