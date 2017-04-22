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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var sum = [];

    var h = 0;

    //Array is always 6x6. If loop more than 4, the code will start adding undefined numbers and will not work.
    //We have 7 pointers to each number that makes an hourglass.
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {

            //Placing the sums in an empty array
            sum[h] = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1]
                    + arr[i+2][j+2];
            //Increment h so that we can place the sums in different index
            h++;
        }
    }

    sum.sort();

    var highest = -99999;

    //Looping through the the sum array and check which one is the biggest.
    for (var x = 0; x < 16; x++){
        if (sum[x] > highest)
            highest = sum[x];
    }

    console.log(highest);
}
