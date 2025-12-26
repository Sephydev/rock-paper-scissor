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

function playRound() {
  const humanChoice = getHumanChoice();
  console.log("Human:", humanChoice);
  const computerChoice = getComputerChoice();
  console.log("Computer:", computerChoice)

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
    return "computer";
  } else if (winningCondition) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    return "human";
  } else {
    console.log("it's a tie!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  for(let i = 0; i < 5; i++) {
    console.group(`Round ${i + 1}`);
    let winner = playRound();
    
    switch(winner) {
      case "computer":
        computerScore += 1;
        break;
      case "human":
        humanScore += 1;
        break;
    }

    console.log(`Score: Human: ${humanScore} | Computer: ${computerScore}`)
    console.groupEnd();
  }
}

playGame();