process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine());
  for(var i = 0; i < n; i++) {
      var s = readLine();
      var result = [];

      for (var j = 0; j < s.length; j++) {
        if (result.indexOf(s.charAt(j)) == -1) {
          result.push(s.charAt(j));
        }
      }
      console.log(result.length);
  }
}
