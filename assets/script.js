//displays the current day
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);


//loop to create time blocks for the work day
for (var i = 9; i < 6; i++){
    var timeBlock = $('<section>');
    timeBlock.addClass('time-block');
    var row = $('<div>');
    row.addClass("row");
    var hour = $("<div>");
    hour.addClass("hour"); 


}