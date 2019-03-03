
var liezo = document.getElementById("dibujo");

var tecla = {
  DOWN: 40,
  RIGTH: 39,
  UP:38,
  LEFT: 37

};



document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("dibujo");
var papel = cuadro.getContext("2d");
var x = 250;
var y = 250;

dibujarLinea( "blue" , 249, 249, 251, 251, papel);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
 {

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(event) {
    var color2 = "blue";
    var movimiento = 10;
    if(event.keyCode){

        if (event.keyCode == tecla.DOWN){
            dibujarLinea(color2, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        }
        else if (event.keyCode == tecla.UP){
            dibujarLinea(color2, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        }
        else if (event.keyCode == tecla.LEFT){
            dibujarLinea(color2, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        }
        else if (event.keyCode == tecla.RIGTH){
            dibujarLinea(color2, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        }

    }
s}















