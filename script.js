function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch(randomNumber) {
    case 1 :
      return "Rock";
      break;
    case 2 :
      return "Paper";
      break;
    case 3 :
      return "Scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Please make a choice between 'Rock', 'Paper' or 'Scissors'.")

  return humanChoice.toLowerCase();
}

console.log("Human:", getHumanChoice());
console.log("Computer:", getComputerChoice());