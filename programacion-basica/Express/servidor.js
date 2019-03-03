var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado){
  resultado.send("Holaaaa, holitas👀");
}

function cursos(peticion, resultado){
  resultado.send("Estos son los cursos");

}

aplicacion.listen(8989);

