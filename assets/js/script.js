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
    $(".button").on("click", function(event){
        var textInput = $("<textarea>").val(text)
        $(this).replaceWith(textInput);
    })
});

//color code
var colorTime = function(){
    var now = moment(now).get('hour');
    if (9<now){
        $("#hnine").addClass("past");
    }
}
colorTime();



//store in local storage