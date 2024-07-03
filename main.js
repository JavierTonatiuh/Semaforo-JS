let btnRed = document.getElementById("red");
let btnYellow = document.getElementById("yellow");
let btnGreen = document.getElementById("green");
let cambio = document.getElementById("cambio");

btnRed.onclick = function (){
    cambio. src = "/images/circulo rojo.png";
}

btnYellow.onclick = function (){
    cambio. src = "/images/circulo amarillo.webp";
}

btnGreen.onclick = function (){
    cambio. src = "/images/circulo verde.png";
}