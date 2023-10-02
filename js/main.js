function getAiChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let aiChoice = choices[Math.floor(Math.random() * choices.length)];
  
  return aiChoice;
} 

function playRound(userChoice, aiChoice) {
  userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  
  let winner;

  switch (userChoice) {
    case "Rock":
      if (aiChoice === "Scissors") {
        console.log("AI selected Scissors, you win!");
        winner = "user";
        return winner;
      } else if (aiChoice === "Paper") {
        console.log("AI selected Paper, you lose!");
        winner = "ai";
        return winner;
      } else if (aiChoice === "Rock") {
        console.log("AI selected Rock, it's a draw!");
        winner = null;
        return winner;
      }
      break;

    case "Paper":
      if (aiChoice === "Rock") {
        console.log("AI selected Rock, you win!");
        winner = "user";
        return winner;
      } else if (aiChoice === "Scissors") {
        console.log("AI selected Scissors, you lose!");
        winner = "ai";
        return winner;
      } else if (aiChoice === "Paper") {
        console.log("AI selected Paper, it's a draw!");
        winner = null;
        return winner;
      }
      break;

    case "Scissors":
      if (aiChoice === "Paper") {
        console.log("AI selected Paper, you win!");
        winner = "user";
        return winner;
      } else if (aiChoice === "Rock") {
        console.log("AI selected Rock, you lose!");
        winner = "ai";
        return winner;
      } else if (aiChoice === "Scissors") {
        console.log("AI selected Scissors, it's a draw!");
        winner = null;
        return winner;
      }
      break;
    
    default: 
      break;
  } 
}

function game() {
  for (let round = 1; round <= 5; round++) {
    let userGamesWon = 0;
    let aiGamesWon = 0;
    let userChoice = prompt("Choose wisely: Rock, Paper or Scissors?");
    
    let winner = playRound(userChoice, getAiChoice());

    if (winner === "user") {
      userGamesWon++;
      if (userGamesWon == 3) return "user";
    } else if (winner === "ai") {
      aiGamesWon++;
      if (aiGamesWon == 3) return "ai";
    }
  }
}

let gameWinner = game();
if (gameWinner === "user") {
  console.log("Congratulations, you won the game!");
} else if (gameWinner === "ai") {
  console.log("Ops, you lost the game!")
}
