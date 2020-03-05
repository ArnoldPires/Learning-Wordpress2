console.log("Print all numbers between -10 and 19");
let num1 = -10;
while(num1 <= 19) {
  console.log(num1);
  document.getElementById('num1').innerHTML = num1;
  num1++;
}
console.log("Print all even numbers between 10 and 40");
let num2 = 10;
while(num2 <= 40){
  console.log(num2);
  document.getElementById('num2').innerHTML = num2;
  num2+=2;
}
//Another way to do the above
console.log("Another way to do above");
let num22 = 10;
while(num22 <= 40){
  if(num22 % 2 === 0){
    console.log(num22);
  }
  num22+=1;
}
