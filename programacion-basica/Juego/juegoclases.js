class pakiman{
  constructor(nombre, tipo, vida, ataque)
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.tipo = tipo;
    this.vida = vida;
    this.ataque = ataque;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar(){
    alert(this.nombre);
  }
  mostrar(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong> <br /");
    document.write("<strong>" + "Tipo: " + this.tipo + "</strong> <br /");
    document.write("<strong>" + "Vida: " + this.vida + "</strong> <br /");
    document.write("<strong>" + "Ataque: " + this.ataque + "</strong> <br /> <hr />");


    document.write("</p>");
  }
}