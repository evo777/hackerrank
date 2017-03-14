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
    var time = readLine();
    var hour = time.charAt(0) + time.charAt(1);
    if (Number(hour) === 24 || (time.substring(8,10) === "AM" && Number(hour) === 12 && time.substring(3,5) === "00")) {
        console.log("00:00:00");
    } else if (time.substring(8,10) === "AM" && Number(hour) === 12) {
        console.log("00" + time.substring(2,8));
    } else if (time.substring(8,10) === "AM") {
        console.log(time.substring(0, time.length - 2));
    } else if (time.substring(8,10) === "PM" && Number(hour) === 12) {
        console.log(time.substring(0,8));
    } else if (time.substring(8,10) === "PM") {
        hour = Number(hour) + 12;
        console.log(hour.toString() + time.substring(2, 8));
    }
}