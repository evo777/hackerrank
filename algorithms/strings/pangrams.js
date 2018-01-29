function generateData(input) {
  var pool = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < input.length; i++) {
    pool = pool.replace(input[i].toLowerCase(), "");
  }

  return (pool.length === 0 ? "" : "not ") + "pangram"
}

function processData(input) {
  process.stdout.write(generateData(input));
}

var _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
