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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    for(var a0 = 0; a0 < t; a0++){
        var i_temp = readLine().split(' ');
        var i = parseInt(i_temp[0]);
        var j = parseInt(i_temp[1]);
    }

}

function processData(input) {
    var lines = input.split('\n');
    var tmp = lines.shift().split(' ');
    var length = parseInt(tmp[0]);
    var count = parseInt(tmp[1]);
    var widths = lines.shift().split(' ');
    for (var i = 0; i < count; ++i) {
        var caseInfo = lines[i].split(' ');
        var start = parseInt(caseInfo[0]);
        var end = parseInt(caseInfo[1]);
        var max = 3;
        for (var j = start; j <= end; ++j) {
            if (widths[j] < max) max = widths[j];
        }
        console.log(max);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});