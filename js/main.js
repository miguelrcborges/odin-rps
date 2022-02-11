const PLAYABLE_OBJETCS = ["rock", "paper", "scissors"]
const capitalize = (string) => string[0].toUpperCase() + string.slice(1)

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
}


function computerSelection() {
    return PLAYABLE_OBJETCS[Math.floor(Math.random() * 3)]
}

function playerSelection() {
    let pick
    while (!PLAYABLE_OBJETCS.includes(pick)) {
        pick = prompt("Write an object", " ").toLowerCase()
    }
    return pick
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return `It's a tie! Both picked ${capitalize(playerSelection)}`
    return (RESULTS[playerSelection][computerSelection]) ? `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
                                                         : `You lost. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(playerSelection(), computerSelection());
        if (roundResult[4] === "w") playerScore++ 
        else if (roundResult[4] === "l") computerScore++
        alert(roundResult + `\nScore\n- You: ${playerScore}\n- Computer: ${computerScore}`);
    }
    alert( playerScore > computerScore ? "Game over. You've won!" : "You've lost :c. Better luck next time!");
}

game()