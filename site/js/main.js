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




function productGenerator(link, id, name, radius, p1, p2, p3, description, price){
    return '<div class="product_box"><a href="'+link+'"><div class="product_img" id="'+id+'"></div></a><div class="product_info"><h1>'+name+'</h1><ul><p><u>'+radius+'</u></p><p>'+p1+'</p><p>'+p2+'</p><p>'+p3+'</p></ul><div class="description">'+description+'</div><div class="price">'+price+'</div><i class="material-icons">shopping_cart</i></div></div>'
    // ladies and gentlemen, the longest line of code ever created
}

function recommended(){
    Vinda49 = productGenerator("", "asteroid_1", "Vinda 49", "Radius: 1km", "60% gold", "20% copper", "", "", "¤500,000")
    Hatov = productGenerator("", "asteroid_2", "Hatov", "Radius: 3km", "80% copper", "10% iron", "", "", "¤750,000")
    Mapus7VU = productGenerator("", "asteroid_3", "Mapus 7VU", "Radius: 200m", "40% gold", "10% copper", "30% iron", "", "¤200,000")
    Atwell = productGenerator("", "comet_1", "Atwell", "Radius: 2km", "83% water", "11% iron dust", "", "", "¤300,000")
    AgraraR74 = productGenerator("", "junk_1", "Agrara R74", "Radius: 3km", "45% plastics", "10% metals", "35% combustible", "", "¤50,000")

    document.getElementsByClassName("product_area")[0].innerHTML = Vinda49 + Hatov + Mapus7VU + Atwell + AgraraR74
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Recommended</p>"
}
// holy shit it works

function asteroids(){
    Vinda49 = productGenerator("", "asteroid_1", "Vinda 49", "Radius: 1km", "60% gold", "20% copper", "", "", "¤500,000")
    Hatov = productGenerator("", "asteroid_2", "Hatov", "Radius: 3km", "80% copper", "10% iron", "", "", "¤750,000")
    Mapus7VU = productGenerator("", "asteroid_3", "Mapus 7VU", "Radius: 200m", "40% gold", "10% copper", "30% iron", "", "¤200,000")

    document.getElementsByClassName("product_area")[0].innerHTML = Vinda49 + Hatov + Mapus7VU
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Asteroids</p>"
}

function comets(){
    Atwell = productGenerator("", "comet_1", "Atwell", "Radius: 2km", "83% water", "11% iron dust", "", "", "¤300,000")

    document.getElementsByClassName("product_area")[0].innerHTML = Atwell
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Comets</p>"
}