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
    const n = parseInt(readLine());
    for(let a0 = 0; a0 < n; a0++){
        let grade = parseInt(readLine());
        //Your code here.
        if (grade > 37 && grade % 5 > 2)
            grade += 5 - grade % 5; //The 5 - grade % 5 is how much the grade have left in order to reach the next divisible of 5.
        process.stdout.write(grade + "\n"); // Printing results
    }

}
