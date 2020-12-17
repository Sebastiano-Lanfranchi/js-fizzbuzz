
var i;
for ( i = 0; i < 100; i++){
  if(i % 15 === 0){
     // outputNumeri.innerHTML = '<li>' + 'FizzBuzz' + '</li>';
     console.log('FizzBuzz')
  }
  else if(i % 3 === 0){
     // outputNumeri.innerHTML ='<li>' + 'Fizz' + '</li>';
     console.log('Fizz')
  }
  else if(i % 5 === 0){
     // outputNumeri.innerHTML ='<li>' + 'Buzz' + '</li>';
     console.log('Buzz')
  }
  else{
   // outputNumeri.innerHTML ='<li>' + i + '</li>';
   console.log(i)
  }
}
