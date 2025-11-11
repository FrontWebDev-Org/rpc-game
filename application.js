let playerScore = 0;
let younesScore = 0;

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const younesChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === younesChoice) {
    result = "It's a Tie! 🤝";
  } else if (
    (playerChoice === "rock" && younesChoice === "scissors") ||
    (playerChoice === "paper" && younesChoice === "rock") ||
    (playerChoice === "scissors" && younesChoice === "paper")
  ) {
    result = `You Win! 🎉 ${playerChoice} beats ${younesChoice}`;
    playerScore++;
  } else {
    result = `You Lose! 😢 ${younesChoice} beats ${playerChoice}`;
    younesScore++;
  }

  document.getElementById(
    "result"
  ).innerText = `You chose ${playerChoice}, Younes chose ${younesChoice}. \n${result}`;

  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = younesScore;
}
