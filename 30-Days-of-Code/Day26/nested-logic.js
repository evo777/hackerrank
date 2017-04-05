function processData(input) {
    //Enter your code here
    var inputArr = input.split('\n');
    var actual = inputArr[0].split(' ');
    var expected = inputArr[1].split(' ');
    var day = 0;
    var month = 1;
    var year = 2;
    var result = 0;

    if (actual[year] > expected[year]) {
        result = 10000;
    } else if (actual[month] > expected[month]) {
        result = 500 * (actual[month] - expected[month]);
    } else if (actual[day] > expected[day]) {
        result = 15 * (actual[day] - expected[day]);
    }

    console.log(result);
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
