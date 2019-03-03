var text = document.getElementById("texto_lineas");
var button = document.getElementById("botoncito");
var color = document.getElementById("texto_color");
button.addEventListener("click", dibujoPorClick) ;


var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var ancho = d.width;



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var color2 = color.value;
  var xy = parseInt(text.value, 10);
  var lineas = xy;
  var l = 0;
  var yi, xf,xf
  var colorcito = color2
  var espacio = ancho / lineas


  for (l = 0; l < lineas; l++) {
    yi= espacio * l;
    xf = espacio * (l + 1);
    yf =yi;
    xi =xf;
    yf2 = yi2 = 500 - (l * espacio);
    dibujarLinea(colorcito, 0, yi, xf, 500);
    dibujarLinea(colorcito, xi, 0, 500, xf);
    dibujarLinea(colorcito, 0, yi2, xf, 0);
    dibujarLinea(colorcito, xi, 500, 500, yf2);
    dibujarLinea(colorcito, 0, yi, 250, 250);
    dibujarLinea(colorcito, xi, 0, 250, 250);
    dibujarLinea(colorcito, 500, yi, 250, 250);
    dibujarLinea(colorcito, xi, 500, 250, 250);
    l++;
    dibujarLinea(colorcito, 1, 1, 1, 499);
    dibujarLinea(colorcito, 1, 499, 499, 499);
    dibujarLinea(colorcito, 1, 1, 499, 1);
    dibujarLinea(colorcito, 499, 1, 499, 499);

  }



}