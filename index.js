function init(){
    document.getElementById("inputAddress").style.display = "none";
    document.getElementById("outputResult").style.display = "none";
    document.getElementById("book").style.display = "none";
}

function display(){
    document.querySelector(".containt").style.display = "none";
    var input = document.getElementById("inputAddress");
    document.querySelector("body").style.backgroundColor = "white";
    input.style.display = "block";
    input.style.animation = "backInUp";
    input.style.animationDuration = "1s";
}

function confirm(){
    var ttp = document.getElementById("ttp");
    var qh = document.getElementById("qh");
    var px = document.getElementById("px");
    var dcct = document.getElementById("dcct");
    if(ttp.value != "" && qh.ivalue != "" && px.value != "" && dcct.value != "")
    {
        document.getElementById("inputAddress").style.display = "none";
        var output = document.getElementById("outputResult");
        output.style.display = "block";
        output.style.animation = "backInUp";
        output.style.animationDuration = "1s";
    }
}

function displayBook(){
    document.getElementById("outputResult").style.display = "none";
    var book = document.getElementById("book");
    book.style.display = "block";
    book.style.animation = "backInUp";
    book.style.animationDuration = "1s";
}