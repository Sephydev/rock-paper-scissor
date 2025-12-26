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

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  const humanChoiceLower = humanChoice.toLowerCase();
  const computerChoiceLower = computerChoice.toLowerCase();
  
  const losingCondition = humanChoiceLower === "rock" && computerChoiceLower === "paper" 
  || humanChoiceLower === "paper" && computerChoiceLower === "scissors"
  || humanChoiceLower === "scissors" && computerChoiceLower === "rock";
  
  const winningCondition = humanChoiceLower === "rock" && computerChoiceLower === "scissors"
  || humanChoiceLower === "paper" && computerChoiceLower === "rock"
  || humanChoiceLower === "scissors" && computerChoiceLower === "paper";
  
  if (losingCondition) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore += 1;
  } else if (winningCondition) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
  } else {
    console.log("it's a tie!");
  }

  console.log(`Score: Human: ${humanScore} | Computer: ${computerScore}`)
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
console.log("Human:", humanSelection);
const computerSelection = getComputerChoice();
console.log("Computer:", computerSelection)

playRound(humanSelection, computerSelection);
