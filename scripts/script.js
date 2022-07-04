const buttons  = Array.from(document.querySelectorAll('.user'));
let computerScore =0;
let userScore = 0;
let state = document.querySelector(".state");
let result = document.querySelector('.result');
function computerPlay() {
    let gameChoices = ['Rock','Paper','Scissors'];
    let randomSlect = Math.floor(Math.random()*3);
    return gameChoices[randomSlect];
}
function endGame() { 
    if(userScore > computerScore) { 
        state.textContent = "You Win the Game! and ... the Earth";
        state.style.color = "green";
    }
    else { 
        state.textContent = "Oops! seems to be you lost and Machines acupy the Earth";
        state.style.color = 'red';
    }
    const tryAgain = document.createElement("button");
    tryAgain.textContent = "Try Again";
    tryAgain.setAttribute('class','tryagain');
    state.appendChild(tryAgain);
}
function checkResult(computerSelection,playerSelect) {
    if((playerSelect === 'Rock' && computerSelection === 'Paper')
    ||(playerSelect === 'Scissors' && computerSelection === 'Rock')
    ||(playerSelect === 'Paper' && computerSelection ==='Scissors')) {
    computerScore++;
    result.innerHTML = `${userScore}-${computerScore} `;
    state.textContent = `you lose ! ${computerSelection} Beats ${playerSelect}`;
    state.style.color = "red";
}
else if(computerSelection === playerSelect) { 
    state.textContent = "Tie state";
    state.style.color = "gray";
}
else { 
    userScore++;
    result.innerHTML = `${userScore}-${computerScore} `;
    state.textContent = `you win ! ${playerSelect} Beats ${computerSelection}`;
    state.style.color = 'green'; 
}
}
function playRound(e) {
    if(userScore >=5 || computerScore >=5) { 
        endGame();
    } 
    else{ 
        let playerSelect = this.classList.item(0);
        checkResult(computerPlay(),playerSelect);
}
}

buttons.forEach(button => {
    button.addEventListener('click',playRound,{capture: true});
});
window.addEventListener('click',(e)=> { 
    if(e.target.getAttribute('class') ==="tryagain") {
        window.location.reload();
    }
})
function removeSelection(buttons) { 
    buttons.forEach(button=> { 
        button.classList.remove('selected');
        });
}