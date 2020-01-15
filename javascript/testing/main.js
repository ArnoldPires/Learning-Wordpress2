// 100 % 3 = 1

//("blah" + "blah")[6]

//This example counts how many letters are in "hello" and "hi" and divdes them
//"hello".length % "hi\\".length


//Variables are simply containers that store values
//They follow this pattern:
var yourVaribleName = yourValue;
var yourValue = "yourVaribleName";

//They can store all of the values we've seen
var name = "Bob";
var secretNumber = 73;
var isCute = true;

//Recall the stored value by calling the variable name
var name = "Bob";
"Hello there" + name  //"hello there Bob"

var num = 37;
num + 3 + 10 //50

//we can also update existing Variables
var name = "Arnold";
name = "Peter";

alert("hi");
console.log("hi");

var userName = prompt("what is your name?");
alert("Nice to meet you, " + userName);

var x = 10;
var y = "a"
y === "b" || x >= 10;
// y === "b" is false but x >= 10 is true. So this whole thing remains as true

var x = 3;
var y = 8;
!(x == "3" || x === y) && !(y != 8 && x <= y)
//         leftside     and    Rightside
//  true                      False     true
// (If the left side is true, it doesn't matter whats on the right. The leftside is true)
//However, there is a ! in the front. Which means the whole thing is false


//False values: (Thise values will always be false. Anything else, is usually true)
// False
//0
//""
//null
//undefined
//NaN

var str = ""
var msg = "haha!"
var isFunny = "false"
!((str || msg) && isFunny);
//leftside        rightside
//false   True    false
// However, because ! is there, the whole thing is false
