var text = document.getElementById("texto_linea");
var button = document.getElementById("botoncito");
button.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 50;
var l = 0;
var yi, xf, xf, yf
var colorcito = "blue"

for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  yf = yi;
  xi = xf;
  yf2 = yi2 = 500 - (l * 10);
  dibujarLinea("blue", 0, yi, xf, 500);
  dibujarLinea("blue", xi, 0, 500, xf);
  dibujarLinea("blue", 0, yi2, xf, 0);
  dibujarLinea("blue", xi, 500, 500, yf2);
  dibujarLinea("blue", 0, yi, 500, 500);
  dibujarLinea("blue", xi, 0, 500, 500);
  dibujarLinea("blue", 500, yi, 500, 500);
  dibujarLinea("blue", xi, 500, 500, 500);
  l++;

}


dibujarLinea("blue", 1, 1, 1, 499);
dibujarLinea("blue", 1, 499, 499, 499);
dibujarLinea("blue", 1, 1, 499, 1);
dibujarLinea("blue", 499, 1, 499, 499);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  alert("No me toques")
}