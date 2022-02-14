//universal variables go here
var dateEl = document.querySelector("#currentDay");
var descriptionEl = document.querySelector(".description");

//function to add date
var getDate = function(){
    var rightNow= moment().format("dddd, MMMM Do, YYYY");
    dateEl.append(rightNow);
};
getDate();


//edit event
$(".row").on("click", "p", function(event){
    // get current text of p element
    var text = $(this)
        .text()
        .trim();
    // replace element with a new textarea
    var textInput = $("<textarea>").val(text)
    $(this).replaceWith(textInput);
});

//color code
var colorTime = function(){
    var now = moment(now).get('hour');
    console.log(now);
    if (9 == now){
        $("#hNine").removeClass("future");
        $("#hNine").addClass("present");
    }
    if (9<now){
        $("#hNine").removeClass("future");
        $("#hNine").addClass("past");
    }
    if (10 == now){
        $("#hNine").removeClass("future");
        $("#hNine").addClass("present");
    }
    if (10<now){
        $("#hTen").removeClass("future");
        $("#hTen").addClass("past");
    }
    if (11 == now){
        $("#hEleven").removeClass("future");
        $("#hEleven").addClass("present");
    }
    if (11<now){
        $("#hEleven").removeClass("future");
        $("#hEleven").addClass("past");
    }
    if (12 == now){
        $("#hTwelve").removeClass("future");
        $("#hTwelve").addClass("present");
    }
    if (12<now){
        $("#hTwelve").removeClass("future");
        $("#hTwelve").addClass("past");
    }
    if (13 == now){
        $("#hOne").removeClass("future");
        $("#hOne").addClass("present");
    }
    if (13<now){
        $("#hOne").removeClass("future");
        $("#hOne").addClass("past");
    }
    if (14 == now){
        $("#hTwo").removeClass("future");
        $("#hTwo").addClass("present");
    }
    if (14<now){
        $("#hTwo").removeClass("future");
        $("#hTwo").addClass("past");
    }
    if (15 == now){
        $("#hThree").removeClass("future");
        $("#hThree").addClass("present");
    }
    if (15<now){
        $("#hThree").removeClass("future");
        $("#hThree").addClass("past");
    }
    if (16 == now){
        $("#hFour").removeClass("future");
        $("#hFour").addClass("present");
    }
    if (16<now){
        $("#hFour").removeClass("future");
        $("#hFour").addClass("past");
    }
    if (17 == now){
        $("#hFive").removeClass("future");
        $("#hFive").addClass("present");
    }
    if (17<now){
        $("#hFive").removeClass("future");
        $("#hFive").addClass("past");
    }
    
}
colorTime();



//store in local storage