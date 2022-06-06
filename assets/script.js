//displays the current day
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

//variable for the current time
var currentTime = moment().format("k");
console.log(currentTime);
var time = parseInt(currentTime, 10);
console.log(time);

var table = $('.table');

for (var i = 9; i < 18; i++ ) {
    // the class of hour.get Id is < currentTime return past, etc.
    //change parent class
    // curenntly printing as undefined
    if (i > time){
        console.log(table.children().eq(i));
        table.children().eq(i).removeClass('past');
        table.children().eq(i).addClass('future');
    }
    else if (i == currentTime) {
        console.log("true");
    }
    else {
        // remains the same, no change needed?
    }


    
}

var timeId = table.children().eq(0).children().eq(0).attr("id"); 
    table.children('tr').removeClass('past');
    table.children('tr').addClass('future');
