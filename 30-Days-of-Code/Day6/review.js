function processData(input) {
    //Enter your code here
    var letters;

    //Remove the number in the front and will make all words in an array
    input = input.split('\n'); //Split the input by each element that are skipped to the new line
    input.shift();

    for (var i = 0; i < input.length; i++) {
        letters = input[i].split(''); //Split the words into an array of letters

        var even = '';
        var odd = '';
        for (var j = 0; j < letters.length; j++) { //Loop through the array of letters
            if (j % 2 === 0) {
                even += letters[j];
            } else {
                odd += letters[j];
            }
        }

        console.log(even + ' ' + odd);
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
