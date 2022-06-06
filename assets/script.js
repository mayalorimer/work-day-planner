//displays the current day
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

//variable for the current time
var currentTime = moment().format("k");
console.log(currentTime);
var time = parseInt(currentTime, 10);
console.log(time);

var table = $('table');

for (var i = 9; i < 18; i++ ) {
    // determines which class should apply to each time block based on if it is in the past, present, or future
    if (i > time){
        $('#' + i).removeClass('past');
        $('#' + i).addClass('future');
    }
    else if (i == currentTime) {
        $('#' + i).removeClass('past');
        $('#' + i).addClass('present');
    }
}
