var numeros = 100;

for(var n = 1; n <= 100; n++){
  if(n % 3 == 0 && n % 5 == 0){
    document.write("FizzBuzz <br />");
  }

    else if(n % 3 == 0){
    document.write("Fizz <br />");
  }

  else if( n % 5 == 0){
    document.write("Buzz <br />");
  }
  else{
   document.write(n + "<br/>")
  }
}



﻿
var numeros = 100;

for(var n = 1; n <= 100; n++){
  if(n % 3 == 0 && n % 5 ==0){
    console.log("FizzBuzz");
  }

    else if(n % 3 == 0){
    console.log("Fizz");
  }

  else if( n % 5 == 0){
    console.log("Buzz");
  }
  else{
   console.log( n )
  }
}


