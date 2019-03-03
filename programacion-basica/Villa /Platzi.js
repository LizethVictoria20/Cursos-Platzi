var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", dibujarTeclado);



var tecla = {
  DOWN: 40,
  RIGTH: 39,
  UP:38,
  LEFT: 37
};


var fondo = {
  url:"tile.png",
  cargaOK: false
};

var pollo ={
  url: "pollo.png",
  cargaOK: false
};
var cantidad = aleatorio(5, 5);

var zorro ={
  url: "zorro.png",
  cargaOK: false
};
var cantidad = aleatorio(5, 5);

var vaca ={
  url: "vaca.png",
  cargaOK: false
};
var cantidad = aleatorio(5, 5);

var cerdo ={
  url: "cerdo.png",
  cargaOK: false
};
var cantidad = aleatorio(5, 5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

zorro.imagen = new Image();
zorro.imagen.src = zorro.url;
zorro.imagen.addEventListener("load", cargarZorro);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarPollo(){
  pollo.cargaOK = true;
  dibujar();
}

function cargarZorro(){
  zorro.cargaOK = true;
  dibujar();
}

function cargarVaca(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo(){
  cerdo.cargaOK = true;
  dibujar();
}



function dibujar(){
  if(fondo.cargaOK == true){
    papel.drawImage(fondo.imagen, 0, 0)
  }

  if(pollo.cargaOK == true){

    console.log(cantidad)
    for(var v=0; v < cantidad; v++)
    {
    var x = aleatorio(320, 100);
    var y = aleatorio(320, 100);
    papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(zorro.cargaOK == true){
    papel.drawImage(zorro.imagen, 420, 420);
  }


  if(vaca.cargaOK == true){

    console.log(cantidad)
    for(var v=0; v < cantidad; v++) {
      var x = aleatorio(420, 250);
      var y = aleatorio(420, 250);
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK == true){

    console.log(cantidad)
    for(var v=0; v < cantidad; v++){
      var x = aleatorio(0, 100);
      var y = aleatorio(0, 100);
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}


function aleatorio(min, maxi){
  var resultado;
  resultado = Math.floor(Math.random() *(maxi - min + 1)) + min;
  return resultado;
}

function moverZorro(mover, xinicial, yinicial, xfinal, yfinal){
  papel.drawImage(zorro.imagen, xfinal, yfinal);
}



function dibujarTeclado(event) {
  var mover = "zorro.png";
  var movimiento = 10;
  var x = 0
  var y = 0
  if(event.keyCode){

    if (event.keyCode == tecla.DOWN){
      moverZorro(mover, x, y, x, y + movimiento, papel);
      y = y + movimiento;

    }

    else if (event.keyCode == tecla.UP){
      moverZorro(mover, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    }
    else if (event.keyCode == tecla.LEFT){
      moverZorro(mover, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    }
    else if (event.keyCode == tecla.RIGTH){
      moverZorro(mover, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    }
  }
}
