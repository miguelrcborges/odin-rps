const PLAYABLE_OBJETCS = ["rock", "paper", "scissors"];
const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

// Saving logic by saving coditions to ram. Goes from playerSelection => computerSelection => Did player win? (bool)
const RESULTS = {
    rock: {
        paper: false,
        scissors: true
    },
    
    paper: {
        rock: true,
        scissors: false,
    },

    scissors: {
        rock: false,
        paper: true
    }
};


const computerSelection = () => PLAYABLE_OBJETCS[Math.floor(Math.random() * 3)];

const buttons = document.querySelectorAll(".option");
const processInput = (Event) => console.log(main(Event.target.dataset.option, computerSelection()))

buttons.forEach(button => button.addEventListener('click', processInput));

const scores = document.querySelectorAll("#score")
const comment = document.querySelector("#comment")

// Main code
let playerPoints = 0;
let computerPoints = 0;
let waitingRestart = false;

function main(playerSelection, computerSelection) {
    if (waitingRestart) {
        scores.forEach(score => score.textContent = score.textContent.slice(0,-1) + "0");
        playerPoints = 0; 
        computerPoints = 0;
        waitingRestart = false;
        comment.textContent = "Play against the machine!";
        return
    }
    
    console.log(playerSelection, computerSelection)
    if (playerSelection === computerSelection) { comment.textContent = `It's a tie! Both played ${playerSelection}` }
    else if (RESULTS[playerSelection][computerSelection]) {
        playerPoints++;
        scores[0].textContent = scores[0].textContent.slice(0,-1) + playerPoints;
        if (playerPoints === 5) {
            waitingRestart = true;
            comment.textContent = "Congratulations, you've won! Click in any button to restart."; 
        }
        else comment.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else {
        computerPoints++;
        scores[1].textContent = scores[1].textContent.slice(0,-1) + computerPoints;
        if (computerPoints === 5) { 
            waitingRestart = true;
            comment.textContent = "You have lost :c. Try again by clicking in any button.";
        }
        else comment.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
}
