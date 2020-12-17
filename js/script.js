
var i;
for ( i = 0; i < 100; i++){
  if(i % 15 === 0){
    i ='FizzBuzz'
     outputNumeri.innerHTML = '<li>' + i + '</li>';
  }
  else if(i % 3 === 0){
    i ='Fizz'
     outputNumeri.innerHTML ='<li>' + i + '</li>';
  }
  else if(i % 5 === 0){
    i ='Buzz'
     outputNumeri.innerHTML ='<li>' + i + '</li>';
  }
  else{
   outputNumeri.innerHTML ='<li>' + i + '</li>';
  }
}
