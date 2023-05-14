const rockbtn = document.getElementById("b1");
const paperbtn = document.getElementById("b2");
const scissorsbtn = document.getElementById("b3");
const result = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

if (rockbtn && paperbtn && scissorsbtn && result) {
  rockbtn.addEventListener("click", function () {
    playgame("rock");
  });

  paperbtn.addEventListener("click", function () {
    playgame("paper");
  });

  scissorsbtn.addEventListener("click", function () {
    playgame("scissors");
  });
}

function playgame(userchoice) {
  let winner;
  let computerChoice = generateComputerChoice();

  if (userchoice == computerChoice) {
    winner = "DRAW";
  } else if (
    (userchoice == "rock" && computerChoice == "scissors") ||
    (userchoice == "scissors" && computerChoice == "paper") ||
    (userchoice == "paper" && computerChoice == "rock")
  ) {
    winner = "You are the winner";
    playerScore++;
  } else {
    winner = "Computer is the winner";
    computerScore++;
  }

  let finalResult;

  if (playerScore == 5) {
    finalResult = "Player wins the game";
  } else if (computerScore == 5) {
    finalResult = "Computer wins the game";
  }
  else{
    finalResult = "let's go";
  }

  result.innerHTML = `Your score = ${playerScore} <br> Computer score = ${computerScore}<br>${finalResult}`;
}

let choices = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
