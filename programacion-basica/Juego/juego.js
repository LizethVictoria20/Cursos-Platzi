var imagenes = [];
imagenes ["vaquin"] = "vaca.png" ;
imagenes ["pollin"] = "pollo.png";
imagenes ["cerdin"] = "cerdo.png";



var coleccion = [];
coleccion.push(new pakiman("vaquin", "tierra", "30", "300") );
coleccion.push(new pakiman("pollin", "Agua", "20", "200") );
coleccion.push(new pakiman("cerdin", "lodo", "10", "100") );

console.log(coleccion);
for( var animalitos of coleccion){
 animalitos.mostrar();
}
for(var x in coleccion){
  console.log(x);
}


