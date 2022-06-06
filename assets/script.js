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
    // the class of hour.get Id is < currentTime return past, etc.
    //change parent class
    // curenntly printing as undefined
    if (i < time){
        $('#' + i).removeClass('past');
        $('#' + i).addClass('future');
    }
    else if (i == currentTime) {
        $('#' + i).removeClass('past');
        $('#' + i).addClass('present');
    }
    else {
        // remains the same, no change needed?
    }


    
}

    
$('#9').removeClass('past');

    //this works
//$('.time-block').removeClass('past');
//$('.time-block').addClass('future');