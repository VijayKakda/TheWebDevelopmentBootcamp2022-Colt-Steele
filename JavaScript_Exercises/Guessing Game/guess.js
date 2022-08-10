let num = parseInt(prompt("Enter Number"));
// console.log(num);
while (!num) {
  num = parseInt(prompt("Enter a valid number"));
}
let match = Math.floor(Math.random() * num) + 1;
console.log(match);

let guess = parseInt(prompt("Guess the number"));
let attempts = 1;

while (parseInt(guess) !== match) {
  attempts++;
  if (guess == "q") break;
  else if (guess > match) {
    guess = prompt("Too high Guess again");
  } else {
    guess = prompt("Too low Guess again");
  }
}
if (guess === "q") {
  console.log("Ok!! You quit");
} else {
  console.log(`You got it in ${attempt} guess`);
}
