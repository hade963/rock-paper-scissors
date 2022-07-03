function computerPlay() {
    let gameChoices = ['rock','paper','scissors'];
    let randomSlect = Math.floor(Math.random()*(3));
    return gameChoices[randomSlect];
}

function playRound(computerSelction,playerSelection) { 

    if(!playerSelection) 
    return false;
    
    let playerSelect = playerSelection.toLowerCase();

    if((playerSelect === 'rock' && computerSelction === 'paper')
    ||(playerSelect === 'scissors' && computerSelction === 'rock')
    ||(playerSelect === 'paper' && computerSelction ==='scissors')) {

        return `you lose ! ${computerSelction} Beats ${playerSelect}`;
    }
    else if(computerSelction === playerSelect)
    return "Tie state";

    else
    return `you win ! ${playerSelect} Beats ${computerSelction}`; 
}

function game() { 
    let score = 0;
    let i=0;

    while(i<5) {
        let userinput = prompt('Enter paper , scissors or rock to start playing');
        let result = playRound(computerPlay(),userinput);

        if(!result) 
        console.log("invalid input");

        else if(result.includes("win")) {
        score++;
            console.log(result);
            i++;
        }

        else if(result.includes('lose')) {
            i++;
            console.log(result);
        }
        else 
        console.log(result);
    }

    let computerScore = 5 - score;

    if(computerScore > score) 
    console.log(`you lost ${computerScore} , ${score}`);

    else if(computerScore === score)
    console.log('Tie State ');

    else 
    console.log(`you win ${score} , ${computerScore}`);
}
game();