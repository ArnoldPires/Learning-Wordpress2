console.log("Print all numbers between -10 and 19 num1");
for(var num1 = -10; num1 <= 19; num1+=1) {
  console.log(num1);
  document.getElementById('num1').innerHTML = num1;
}
//Another way to do the above
console.log("Another way to do above num11");
for(var num11 = -10; num11 < 20; num11++){
  console.log(num11);
}
console.log("Print all even numbers between 10 and 40 num2");
for(var num2 = 10; num2 <= 40; num2+=2) {
  console.log(num2);
  document.getElementById('num2').innerHTML = num2;
} //This code just blindly adds 2 to the code, if the numbers change, it will always blindly add
//Another way to do the above, but it checks to make sure all numbers are even
console.log("Another way to do above num22");
for(var num22 = 10; num22 <= 40; num22 += 1) {
  if(num22 % 2 === 0) {
    console.log(num22);
  }
}
console.log("Print all odd numbers between 300 and 333 num3");
for(var num3 = 301; num3 <= 333; num3+=2) {
  console.log(num3);
  document.getElementById('num3').innerHTML = num3;
} //This code is kinda similar to num2. It solves the problem, but is not scaleable
//Another way to do the above, but it checks to make sure all numbers are odd
console.log("Another way to do above num33");
for(var num33 = 300; num33 <= 333; num33++) {
  if(num33 % 2 !== 0) {
    console.log(num33);
  }
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50 num4");
for(var num4 = 5; num4 <=50; num4++) {
  if(num4 %3 === 0 && num4 %5 === 0) {
    console.log(num4);
    document.getElementById('num4').innerHTML = num4;
  }
}
