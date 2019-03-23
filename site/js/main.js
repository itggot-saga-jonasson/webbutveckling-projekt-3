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
    var recommendContainment = '<div class="product_box"> <a href=""> <div class="product_img" id="asteroid_3"></div></a><div class="product_info"><h1>Mapus 7VU</h1><ul><p><u>Radius: 200m</u></p><p>40% gold</p><p>10% copper</p><p>30% iron</p></ul><div class="price">¤200,000</div><i class="material-icons">shopping_cart</i></div></div>';

    document.getElementsByClassName("product_area")[0].innerHTML = recommendContainment
    console.log = "hellu"
}
// if it's stupid, but it works, it ain't stupid