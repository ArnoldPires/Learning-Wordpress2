function doSomething() {
  console.log("Hello World");
  document.getElementById('hw').innerHTML = "Hello World";
}
doSomething();

function greet(person1, person2, person3) {
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
  document.getElementById('person1').innerHTML = "Hi " + person1;
  document.getElementById('person2').innerHTML = "Hi " + person2;
  document.getElementById('person3').innerHTML = "Hi " + person3;
}
greet("Boro", "Mish", "Kerry");

//The Return Keyword
//Send back an output value
function square(x) {
  console.log(x*x);
}
document.getElementById('squared').innerHTML = "4 squared is: " + square(4);
var result = square(104);

//Return keyword to output a value from a function
//This function capitalizes the first character in a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "new york";
var capital = capitalize(city);
console.log(capital);
document.getElementById('newyork').innerHTML = capital;

function test(x,y) {
  return y - x;
}
test(10,40);
//result = 30 when pasted into the console

function test2(x) {
  return x*2;
  console.log(x);
  return x/2;
}
test2(40);
//result 80 when pasted into the console
