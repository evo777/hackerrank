function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var array = input[1].split(" ");
    var hash = {};

    for(var i = 0; i < array.length; i++) {
        hash[array[i]] ? hash[array[i]]++ : hash[array[i]] = 1
    }

    for(var key in hash) {
        if (hash[key] === 1) {
            console.log(key);
            return;
        }
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
