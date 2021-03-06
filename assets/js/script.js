//universal variables go here
var dateEl = document.querySelector("#currentDay");
var descriptionEl = document.querySelector(".description");

//function to add date
var getDateInitial = function(){
    var rightNow= moment().format("dddd, MMMM Do");
    dateEl.append(rightNow);
};
//function to update date 
var getDate = function(){
    var rightNow= moment().format("dddd, MMMM Do, YYYY");
    dateEl.replaceWith(rightNow);
    console.log("date has been update" + rightNow);
}

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
};
//save to local storage when save button is clicked
document.getElementById("bNine").addEventListener("click", function(){
    var savedEvents = document.getElementById('hNine').value;
    localStorage.setItem("eventNine", savedEvents);
})
document.getElementById("bTen").addEventListener("click", function(){
    var savedEvents = document.getElementById('hTen').value;
    localStorage.setItem("eventTen", savedEvents);
})
document.getElementById("bEleven").addEventListener("click", function(){
    var savedEvents = document.getElementById('hEleven').value;
    localStorage.setItem("eventEleven", savedEvents);
})
document.getElementById("bTwelve").addEventListener("click", function(){
    var savedEvents = document.getElementById('hTwelve').value;
    localStorage.setItem("eventTwelve", savedEvents);
})
document.getElementById("bOne").addEventListener("click", function(){
    var savedEvents = document.getElementById('hOne').value;
    localStorage.setItem("eventOne", savedEvents);
})
document.getElementById("bTwo").addEventListener("click", function(){
    var savedEvents = document.getElementById('hTwo').value;
    localStorage.setItem("eventTwo", savedEvents);
})
document.getElementById("bThree").addEventListener("click", function(){
    var savedEvents = document.getElementById('hThree').value;
    localStorage.setItem("eventThree", savedEvents);
})
document.getElementById("bFour").addEventListener("click", function(){
    var savedEvents = document.getElementById('hFour').value;
    localStorage.setItem("eventFour", savedEvents);
})
document.getElementById("bFive").addEventListener("click", function(){
    var savedEvents = document.getElementById('hFive').value;
    localStorage.setItem("eventFive", savedEvents);
})
//function to load events
var loadEvent = function(){
    document.getElementById("hNine").value=localStorage.getItem("eventNine");
    document.getElementById("hTen").value=localStorage.getItem("eventTen");
    document.getElementById("hEleven").value=localStorage.getItem("eventEleven");
    document.getElementById("hTwelve").value=localStorage.getItem("eventTwelve");
    document.getElementById("hOne").value=localStorage.getItem("eventOne");
    document.getElementById("hTwo").value=localStorage.getItem("eventTwo");
    document.getElementById("hThree").value=localStorage.getItem("eventThree");
    document.getElementById("hFour").value=localStorage.getItem("eventFour");
    document.getElementById("hFive").value=localStorage.getItem("eventFive");
}

//loads locally stored events, color codes based on current time and gets the initial date upon loading page
loadEvent();
colorTime();
getDateInitial();    
//updates date and time for color coding every 1 minute
setInterval(function(){colorTime();getDate();}, 60*1000);