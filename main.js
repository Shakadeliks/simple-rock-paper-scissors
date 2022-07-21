function getPlayerNameAndStart() {
    const playerName = window.prompt("Let's play rock, paper, scissors! Firstly, please enter your name below");
    window.alert(`Welcome ${playerName}! time to play, get ready. Best out of 5 wins. Press OK when you're ready to play!`);
    return playerName;
}
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[~~(Math.random() * choices.length)];
    return computerChoice;
}
function getPlayerChoice(playerName) {
    const promptTexts = [ 
        `Rock, paper or scissors? what will it be ${playerName}`,
        `Choose wisely, ${playerName}. Rock, paper or scissors?`,
        `Don't be scared, ${playerName}. Rock, paper or scissors?`,
        `Rock, paper or scissors? Take your pick, ${playerName}!`,
        `So what does ${playerName} choose? Rock, paper or scissors?`
    ]
    let playerInput = window.prompt(
        promptTexts[~~(Math.random() * promptTexts.length)]
    );
    return playerInput.toLowerCase().trim();
};
function playRound(playerChoice, computerChoice, weapons) {
    let winner;
    if (weapons[playerChoice].strongTo === computerChoice) {
        alert(`${playerChoice} beats ${computerChoice}! You win!`);
        winner = 'player';
        return winner;
    }
    if (weapons[playerChoice].weakTo === computerChoice) {
        alert(`${computerChoice} beats ${playerChoice}! you lose!`);
        winner = 'computer';
        return winner;
    }
    if (playerChoice === computerChoice) {
        alert(`this round was a tie!`);
        winner = 'tie';
        return winner;
    }
};
function game() {
    const weapons = {
        rock: {
            weakTo: 'paper',
            strongTo: 'scissors'
        },
        paper: {
            weakTo: 'scissors',
            strongTo: 'rock'
        },
        scissors: {
            weakTo: 'rock',
            strongTo: 'paper'
        }
    };
    let scoreBoard = {
        playerScore: 0,
        computerScore: 0,
    };
    let { playerScore, computerScore } = scoreBoard;
    const playerName = getPlayerNameAndStart();
    for (let i = 0; i < 5; i++){
        console.log('for loop iteration', i);
        if (
            (i >= 3) &&
            (
                playerScore >= 3 && computerScore <= 1 ||
                computerScore >= 3 && playerScore <= 1
            )
        ) {
            if (playerScore > computerScore) {
                (alert(`Congratulations, ${playerName}. YOU ARE THE WINNER!`));              
            } else if ( computerScore > playerScore) {
                (alert(`Better luck next Time, ${playerName}. YOU LOSE!`));
            }
        } else if (i === 4) {
            let playerChoice = getPlayerChoice(playerName);
            if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
                while (playerChoice !== "rock" || "paper" || "scissors") {
                    console.log('while loop activated');
                    playerChoice = window.prompt("Please enter a valid choice. Rock, paper or scissors.")
                    console.log(playerChoice);
                    if (playerChoice === "rock"
                        || playerChoice === "paper" 
                        || playerChoice === "scissors") {
                        console.log('about to break')
                        break;
                    }
                };
            };
            const roundWinner = playRound(
                playerChoice,
                computerChoice = getComputerChoice(),
                weapons
            );
            if (roundWinner == 'player') {
                playerScore++;               
            } else if (roundWinner == 'computer') {
                computerScore++;               
            }
            if (playerScore > computerScore) {
                alert(`Congratulations, ${playerName}. YOU ARE THE WINNER! \n SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            }
            if (computerScore > playerScore) {
                alert(`Better luck next Time, ${playerName}. YOU LOSE! \n SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            }
            if (computerScore == playerScore) {
                alert(`Fair game, this match was a tie! \n SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            }
        } else {
            let playerChoice = getPlayerChoice(playerName);
            if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
                while (playerChoice !== "rock" || "paper" || "scissors") {
                    console.log('while loop activated');
                    playerChoice = window.prompt("Please enter a valid choice. Rock, paper or scissors.")
                    console.log(playerChoice);
                    if (playerChoice === "rock"
                        || playerChoice === "paper" 
                        || playerChoice === "scissors") {
                        console.log('about to break')
                        break;
                    }
                };
            };
            roundWinner = playRound(
                playerChoice,
                computerChoice = getComputerChoice(),
                weapons
            )
            if (roundWinner == 'player') {
                playerScore++;
                alert(`SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            } else if (roundWinner == 'computer') {
                computerScore++;
                alert(`SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            } else {
                alert(`SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            }
        } 
    };
}
game();