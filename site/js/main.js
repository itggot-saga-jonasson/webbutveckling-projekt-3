function bringOutMenu(){
    var x = document.getElementsByClassName("menu")[0];
    var y = document.getElementsByClassName("cover")[0];
    if(x.className === "menu"){
        x.className += " appear";
        y.className += " tadaa";
    }
}

function bringBackMenu(){
    var x = document.getElementsByClassName("menu")[0];
    var y = document.getElementsByClassName("cover")[0];
    if (x.className === "menu appear"){
        x.classList.remove("appear");
        y.classList.remove("tadaa");
    }
}


function recommended(){

    while(document.querySelectorAll(".visible").length > 0){
        document.getElementsByClassName(".visible")[0].classList.remove("visible")
    }

    document.getElementById("asteroid_1").className += " visible"
    document.getElementById("asteroid_2").className += " visible"
    document.getElementById("asteroid_3").className += " visible"
    document.getElementById("comet_1").className += " visible"

    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Recommended</p>"
}
// if it's stupid but it works, it ain't stupid