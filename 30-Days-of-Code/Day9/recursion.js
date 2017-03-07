function processData(input) {
    //Enter your code here
    console.log(factorial(input));
}

function factorial(num){
    if (num === 0)
        return 1;
    else
        return (num * (factorial(num - 1)));
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