//Create the secretNumber
let secretNumber = 4;
//ask the user to guess the number
let guess = Number(prompt("Guess a number"));

//Check if guess is right
//by writing (Number(guess)) you make it so guess turns into the number 4
if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
//Check if the number is too high
else if(guess > secretNumber) {
  alert("Too high. Guess again.");
}
//Check if the number is too low
 else {
  alert("Too low, guess again.");
}
