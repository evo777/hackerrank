function int(str) {
    return parseInt(str, 10);
}

function solve(a) {
    var sum = 0,
        m = -Infinity,
        i = a.length;
    while (i > 0) {
        i--;
        if (a[i] < m) {
            sum += m - a[i]
        } else if (m < a[i]) {
            m = a[i]
        }
    }
    return sum;
}

function processData(input) {
    var lines = input.trim().split('\n');
    var t = int(lines.shift());
    while (t > 0) {
        lines.shift();
        var a = lines.shift().split(' ').map(int);
        console.log(solve(a));
        t -= 1;
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