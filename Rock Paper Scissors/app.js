const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    // Capitalizing first letter for fun, could have fixed in HTML
    let userOriginalText = userChoiceDisplay.textContent;
    let userCapitalizedText = userChoiceDisplay.textContent[0].toUpperCase();
    userChoiceDisplay.textContent =
      userCapitalizedText + userOriginalText.slice(1);
    // Generating computer choice from 1-3. 1. rock 2. paper 3. scissors
    generateComputerChoice();
    // Capitalizing first letter for fun again
    let computerOriginalText = computerChoice;
    let computerCapitalizedText = computerOriginalText[0].toUpperCase();
    computerChoiceDisplay.textContent =
      computerCapitalizedText + computerOriginalText.slice(1);
    // Choosing winner, long if statements. Use switch in future.
    let winner = determineWinner(userChoice, computerChoice);
    // Updating result display to the winner string
    resultDisplay.textContent = winner;
  })
);

function generateComputerChoice() {
  // returning a number from 1 to 3
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  // if / else chain, should use switch next time. Also lots of redundant code, can make this more compact next time.
  if (userChoice === computerChoice) {
    return "Draw";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
}
