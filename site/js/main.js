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




function productGenerator(link, id, name, u, p1, p2, p3, description, price){
    return '<div class="product_box"><a href="'+link+'"><div class="product_img" id="'+id+'"></div></a><div class="product_info"><h1>'+name+'</h1><ul><p><u>'+u+'</u></p><p>'+p1+'</p><p>'+p2+'</p><p>'+p3+'</p></ul><div class="description">'+description+'</div><div class="price">'+price+'</div><i class="material-icons">shopping_cart</i></div></div>'
    // ladies and gentlemen, the longest line of code ever created
}



// list of products

Athena = productGenerator("", "athena", "ATHENA IV", "", "", "", "", "ATHENA is the ultimate personal assistant. She assists factory building and management, but also functions as a friendly family drone. Every factory kit ships with one ATHENA.", "¤2599")
EmpireMFG = productGenerator("", "factory_1", "Empire Mfg.", "GDP: ¤2,000,000", "", "", "", "Empire Mfg. specializes in shuttle- and spacecraft development.", "¤2,700,000")
CobaltCorp = productGenerator("", "factory_2", "Cobalt Corp.", "GDP: ¤1,300,000", "", "", "", "Cobolt Corp. specializes in soft drink production.", "¤1,900,000")
ApexiInc = productGenerator("", "factory_3", "Apexi Inc.", "GDP: ¤500,000", "", "", "", "Apexi Inc. specializes in ready-made, factory-produced desserts and sweets.", "¤900,000")
R437 = productGenerator("", "factory_kit_1", "R437 - Factory kit", "500m conveyors", "5t iron", "12t plastics", "500kg coal", "", "¤150,000")
Vinda49 = productGenerator("", "asteroid_1", "Vinda 49", "Radius: 1km", "60% gold", "20% copper", "", "", "¤500,000")
Hatov = productGenerator("", "asteroid_2", "Hatov", "Radius: 3km", "80% copper", "10% iron", "", "", "¤750,000")
Mapus7VU = productGenerator("", "asteroid_3", "Mapus 7VU", "Radius: 200m", "40% gold", "10% copper", "30% iron", "", "¤200,000")
Zenviri = productGenerator("", "asteroid_4", "Zenviri", "Radius: 1.5km", "65% uranium", "30% coal", "", "", "¤700,000")
Atwell = productGenerator("", "comet_1", "Atwell", "Radius: 2km", "83% water", "11% iron dust", "", "", "¤300,000")
AgraraR74 = productGenerator("", "junk_1", "Agrara R74", "Radius: 3km", "45% plastics", "10% metals", "35% incendiary", "", "¤50,000")
Gabri = productGenerator("", "asteroid_5", "Gabri", "Radius: 1.5km", "55% platinum", "30% coal", "10% copper", "", "¤900,000")
Sputnik = productGenerator("", "comet_2", "Sputnik", "Radius: 2.5km", "68% water", "21% silver dust", "5% platinum dust", "", "¤100,000")




function recommended(){
    document.getElementsByClassName("product_area")[0].innerHTML = Athena + EmpireMFG + CobaltCorp + ApexiInc + R437 + Vinda49 + Hatov + Mapus7VU + Atwell + AgraraR74 + Zenviri + Gabri + Sputnik
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Recommended</p>"
}
// holy shit it works



function corporating(){
    document.getElementsByClassName("product_area")[0].innerHTML = Athena + EmpireMFG + CobaltCorp + ApexiInc + R437
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Corporating</p>"
}

function factoryKits(){
    document.getElementsByClassName("product_area")[0].innerHTML = Athena + R437
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Factory kits</p>"
}

function contracts(){
    document.getElementsByClassName("product_area")[0].innerHTML = EmpireMFG + CobaltCorp + ApexiInc
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Contracts</p>"
}



function spaceObjects(){
    document.getElementsByClassName("product_area")[0].innerHTML = Vinda49 + Hatov + Mapus7VU + Atwell + AgraraR74 + Zenviri + Gabri + Sputnik
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Space objects</p>"
}

function asteroids(){
    document.getElementsByClassName("product_area")[0].innerHTML = Vinda49 + Hatov + Mapus7VU + Zenviri + Gabri
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Asteroids</p>"
}

function comets(){
    document.getElementsByClassName("product_area")[0].innerHTML = Atwell + Sputnik
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Comets</p>"
}

function scrapSatellites(){
    document.getElementsByClassName("product_area")[0].innerHTML = AgraraR74
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Scrap satellites</p>"
}


function materials(){
    document.getElementsByClassName("product_area")[0].innerHTML = Vinda49 + Hatov + Mapus7VU + Atwell + Gabri + Zenviri
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Materials</p>"
}

function gold(){
    document.getElementsByClassName("product_area")[0].innerHTML = Vinda49 + Mapus7VU
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Gold</p>"
}

function silver(){
    document.getElementsByClassName("product_area")[0].innerHTML = Sputnik
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Silver</p>"
}

function copper(){
    document.getElementsByClassName("product_area")[0].innerHTML = Hatov + Vinda49 + Mapus7VU + Gabri
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Copper</p>"
}

function iron(){
    document.getElementsByClassName("product_area")[0].innerHTML = Hatov + Atwell
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Iron</p>"
}

function platinum(){
    document.getElementsByClassName("product_area")[0].innerHTML = Gabri + Sputnik
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Platinum</p>"
}

function uranium(){
    document.getElementsByClassName("product_area")[0].innerHTML = Zenviri
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Uranium</p>"
}

function coal(){
    document.getElementsByClassName("product_area")[0].innerHTML = Zenviri + Gabri
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Coal</p>"
}

function water(){
    document.getElementsByClassName("product_area")[0].innerHTML = Atwell + Sputnik
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Water</p>"
}

function plastics(){
    document.getElementsByClassName("product_area")[0].innerHTML = AgraraR74
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Plastics</p>"
}

function metals(){
    document.getElementsByClassName("product_area")[0].innerHTML = AgraraR74
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Metals (unsorted)</p>"
}

function incendiary(){
    document.getElementsByClassName("product_area")[0].innerHTML = AgraraR74
    document.getElementsByClassName("info_box")[0].innerHTML = "<p>Incendiary</p>"
}