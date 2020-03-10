//This function checks to see if the number is even or not
console.log("isEven()");
function isEven(x) {
  if (x < 0 ) {
    return false
  }
  else if (x % 2 == 0) {
    return true
  } else {
    return isEven(x-2)
  }
}
console.log(isEven(4)); //true
console.log(isEven(21)); //false
console.log(isEven(68)); //true
console.log(isEven(333)); //false
document.getElementById('isEven1').innerHTML = isEven(4);
document.getElementById('isEven2').innerHTML = isEven(21);
document.getElementById('isEven3').innerHTML = isEven(68);
document.getElementById('isEven4').innerHTML = isEven(333);

console.log("factorial()");
// This is math...
//example: 4! = 4*3*2*1 = 24
//example: 6! = 6*5*4*3*2*1 = 720
// != is: not equal
function factorial(y) {
  return (y != 1) ? y * factorial(y - 1) : 1;
}
console.log(factorial(5)); //120
console.log(factorial(2)); //2
console.log(factorial(10)); //3628800
console.log(factorial(1)); //1
document.getElementById('factorial1').innerHTML = factorial(5);
document.getElementById('factorial2').innerHTML = factorial(2);
document.getElementById('factorial3').innerHTML = factorial(10);
document.getElementById('factorial4').innerHTML = factorial(1);

console.log("kebabToSnake()");
function kebabToSnake2() {
  var str = document.getElementsByClassName("kebab").innerHTML;
  var res = str.replace(/-/i, '_');
  document.getElementsByClassName("kebab").innerHTML = res;
}
