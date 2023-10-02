function getAiChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let aiChoice = choices[Math.floor(Math.random() * choices.length)];
  
  return aiChoice;
} 

function playRound(userChoice, aiChoice) {
  userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

  switch (userChoice) {
    case "Rock":
      if (aiChoice === "Scissors") {
        return "AI selected Scissors, you win!";
      } else if (aiChoice === "Paper") {
        return "AI selected Paper, you lose!";
      } else if (aiChoice === "Rock") {
        return "AI selected Rock, it's a draw!";
      }
      break;

    case "Paper":
      if (aiChoice === "Rock") {
        return "AI selected Rock, you win!";
      } else if (aiChoice === "Scissors") {
        return "AI selected Scissors, you lose!";
      } else if (aiChoice === "Paper") {
        return "AI selected Paper, it's a draw!";
      }
      break;

    case "Scissors":
      if (aiChoice === "Paper") {
        return "AI selected Paper, you win!";
      } else if (aiChoice === "Rock") {
        return "AI selected Rock, you lose!";
      } else if (aiChoice === "Scissors") {
        return "AI selected Scissors, it's a draw!";
      }
      break;
    
    default: 
      break;
  } 
}
