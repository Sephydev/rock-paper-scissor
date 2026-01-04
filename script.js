function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";

  switch(randomNumber) {
    case 1 :
      computerChoice =  "Rock";
      break;
    case 2 :
      computerChoice = "Paper";
      break;
    case 3 :
      computerChoice =  "Scissors";
      break;
    }

    createElemAndAppend(`Computer choose: ${computerChoice}.`);
    return computerChoice;
}

function getHumanChoice(e) {
  const humanChoice = e.target.textContent;
  createElemAndAppend(`You choose: ${humanChoice}.`);
  return humanChoice;
}

function createElemAndAppend(text) {
  const para = document.createElement("p");
  para.textContent = text;
  resultContainer.appendChild(para);
}

function checkWinnerRound (humanChoice, computerChoice) {
  const losingCondition = humanChoice === "rock" && computerChoice === "paper" 
  || humanChoice === "paper" && computerChoice === "scissors"
  || humanChoice === "scissors" && computerChoice === "rock";
  
  const winningCondition = humanChoice === "rock" && computerChoice === "scissors"
  || humanChoice === "paper" && computerChoice === "rock"
  || humanChoice === "scissors" && computerChoice === "paper";
  
  if (losingCondition) {
    createElemAndAppend(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore += 1;
  } else if (winningCondition) {
    createElemAndAppend(`You won! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
  } else {
    createElemAndAppend("It's a tie!");
  }

}

function checkWinnerGame () {
  if (humanScore >= 5 || computerScore >= 5) {
    buttons.forEach(btn => {
      btn.removeEventListener("click", playRound);
      createElemAndAppend(`The winner is ${humanScore >= 5 ? "You" : "the Computer"}!`);
    })
  }
}

function playRound(e) {
  const humanChoice = getHumanChoice(e);
  const computerChoice = getComputerChoice();

  const humanChoiceLower = humanChoice.toLowerCase();
  const computerChoiceLower = computerChoice.toLowerCase();

  checkWinnerRound(humanChoiceLower, computerChoiceLower);

  // Display score
  createElemAndAppend(`Player: ${humanScore} | Computer: ${computerScore}`);
  
  // Separate round
  createElemAndAppend('-------------------------------');

  checkWinnerGame();
  
}

const resultContainer = document.querySelector(".results");
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", playRound);
})
