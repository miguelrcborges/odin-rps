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


const computerSelection = () => PLAYABLE_OBJETCS[Math.floor(Math.random() * 3)]

function playerSelection() {
    let pick
    while (!PLAYABLE_OBJETCS.includes(pick)) {
        pick = prompt("Write an object", "");
        pick = pick ? pick.toLowerCase() : null;
    }
    return pick
}

const playRound = (playerSelection, computerSelection) => playerSelection === computerSelection 
                                                        ? `It's a tie! Both picked ${capitalize(playerSelection)}`
                                                        : RESULTS[playerSelection][computerSelection] 
                                                        ? `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
                                                        : `You lost. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
