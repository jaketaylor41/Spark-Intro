console.log("Step 2");


$(document).ready(function () {
    console.log("Step 3: consoooooul the vampire");

    $("#getTedBtn").on("click", function () {
        console.log("Step 4");
        goGetTed();
    });
});

function goGetTed() {
    console.log("Step 5");
    $.ajax({
        type : "GET",
        url : "/hearts",
        success : function (data) {
            appendDom(data);
        }
    });
    console.log("Step 6")
}

function appendDom(data) {
    $("#container").append("<div></div>");
    var el = $("#container").children().last();
    el.append("<p>" + data.name + "</p>");
    el.append("<p>" + data.age + "</p>");
    el.append("<p>" + data.alive + "</p>");
}

var scott = {};
scott.name = "Scott";
scott.age = 50;
scott.bornCity = "Fridley";
scott.currentCity = "Phoenix";

var ted = {
    name : "Ted",
    age: 85,
    bornCity: "Chi",
    currentCity: "Phoenix",
    alive: true

};