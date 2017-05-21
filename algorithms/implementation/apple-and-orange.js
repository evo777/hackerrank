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
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]); //Point house distance 1
    var t = parseInt(s_temp[1]); //Point house distance 2
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]); //Position of apple tree
    var b = parseInt(a_temp[1]); //Position of orange tree
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]); //Number of apples
    var n = parseInt(m_temp[1]); //Number of oranges
    apple = readLine().split(' ');
    apple = apple.map(Number); //Array of apples that have fallen from the tree
    orange = readLine().split(' ');
    orange = orange.map(Number); //Array of oranges that have fallen from the tree

    var apples = 0;
    var oranges = 0;

    for(var i = 0; i < apple.length; i++) {
        if ((a + apple[i] >= s) && (a + apple[i] <= t)) {
            apples++;
        }
    }

    for(var j = 0; j < orange.length; j++) {
        if ((b + orange[j] >=s) && (b + orange[j] <= t)) {
            oranges++;
        }
    }

    console.log(apples);
    console.log(oranges);
}