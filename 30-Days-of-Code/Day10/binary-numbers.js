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
    var array = [];

    while(n != 0) { //Keep looping until n is equal to 0.
        if (n%2 == 0)
            array.push(0);
        if (n%2 == 1)
            array.push(1);
        n = Math.floor(n/2); //Reduce n everytime 1 is pushed into the arrayay.
    }

    var result = 0;
    var cur = 0;


    for (var i = 0; i < array.length; i++) {
        if (array[i] == 1)
            cur++;
        else if (array[i] == 0){
            if (cur > result)
                result = cur;
            cur = 0;
        }
    }

    if (cur > result)
        result = cur;

    console.log(result);

}
