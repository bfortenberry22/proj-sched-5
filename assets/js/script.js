//universal variables go here
var dateEl = document.querySelector("#currentDay");

//function to add date
var getDate = function(){
    var rightNow= moment().format("dddd, MMMM Do, YYYY");
    dateEl.append(rightNow);
};

getDate();


//create a table

//edit event 

//store in local storage