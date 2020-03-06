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
console.log("Print all odd numbers between 300 and 333");
let num3 = 301;
while(num3 <= 333){
  console.log(num3);
  document.getElementById('num3').innerHTML = num3;
  num3 += 2;
}
console.log("Another way to do above");
let num33 = 300;
while(num33 <= 333){
  if(num33 % 2 !== 0){
    console.log(num33);
  }
  num33+=1;
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
let num4 = 5;
while(num4 <= 50){
  if(num4 %3 === 0 && num4 % 5 === 0){
    console.log(num4);
    document.getElementById('num4').innerHTML = num4;
  }
  num4++;
}
