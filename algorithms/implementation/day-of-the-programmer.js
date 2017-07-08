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

function solve(year){
    // Complete this function
    if(year == 1918){
        return '26.09.' + year;
    }else{

        var leapYear = false;

        if(year < 1918 && year % 4 == 0){
            leapYear = true;
        }else if(year > 1918 && year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
            leapYear = true;
        }

        if(leapYear){
           return '12.09.' + year;
        }else{
            return '13.09.' + year;
        }



    }

}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}