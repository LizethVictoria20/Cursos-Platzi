var numero = 100;

for(n = 1; n <= 100; n++){
  if(n % 3 == 0){
    document.write("Fizz");
  }
  if(n % 5 == 0){
    document.write("Buzz");
  }
  else if(n % 3 != 0 && n % 5 != 0){
    document.write();
  }
  document.write( n + "<br />")
}
