//If age is negative print error message
//if age is 21 printer happy birthday
//if age is odd print your age is odd

let age = prompt("How old are you?");
if (age < 21) {
  alert("You are not old enough.");
} else if (age == 21) {
  alert("Happy Birthday! Come on in.");
} else if (age >= 100 ) {
  alert("What the hell! How are you still alive!?")
}else {
  alert("Come on in.");
};
