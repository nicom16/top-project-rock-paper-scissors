// Main

let userWins = 0;
let aiWins = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const winner = playRound(e.currentTarget.textContent, getAiChoice());

    if (winner === "user") {
      userWins++;
    } else if (winner === "ai") {
      aiWins++;
    }
   
    const resultSection = document.querySelector('#result');
    
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = "The winner of this round is: " + winner;
    resultSection.appendChild(resultParagraph); 
 
    const currentScoreParagraph = document.createElement('p');
    currentScoreParagraph.textContent = "Current score: user " + userWins + " - " + aiWins + " ai";
    resultSection.appendChild(currentScoreParagraph);

    if (userWins == 5 || aiWins == 5) {
      let gameWinner = (userWins == 5) ? "user" : "ai";
      
      const gameWinnerParagraph = document.createElement('p');
      gameWinnerParagraph.textContent = "The winner of this game is: " + gameWinner + "! Congratulations!";
      resultSection.appendChild(gameWinnerParagraph);

      userWins = 0;
      aiWins = 0;
    }
  });
});

// Functions
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

// Old stuff 
/*function game() {
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
}*/
