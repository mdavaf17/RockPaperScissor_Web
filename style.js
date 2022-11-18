// Selecting elements.
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');

// Storing the scores.
let computerScore = localStorage.getItem("cscore");
let playerScore = localStorage.getItem("pscore");

pScore.innerHTML = playerScore;
cScore.innerHTML = computerScore;

const choices = ["rock", "paper", "scissor"];
const text = document.getElementById('hasil');

function reset(){
    localStorage.setItem("pscore", 0);
    localStorage.setItem("cscore", 0);
    window.location = "game.html";
}

const tie = ()=>{
    text.innerHTML = "It's a Tie!";
    text.style.color = '#ffe600';
}

const win = ()=>{
    text.innerHTML = "You Win!";
    text.style.color = '#1eff00';
    playerScore++;
}

const lose = ()=>{
    text.innerHTML = "You Loose!";
    text.style.color = '#ff0f0f';
    computerScore++;
}

// Game Functionality.
function game(userchoice){
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    console.log(randomNum);
    compchoice = choices[randomNum];

    // If it's a Tie .
    if(userchoice === compchoice){
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        tie();
    }

        // if it's not a Tie.
        else if(userchoice === "rock" && compchoice === "scissor"){
            win();
            pScore.innerHTML = playerScore;
        }else if(userchoice === "rock" && compchoice === "paper"){
            lose();
            cScore.innerHTML = computerScore;
        }else if(userchoice === "paper" && compchoice === "scissor"){
            lose();
            cScore.innerHTML = computerScore;
        }else if(userchoice === "paper" && compchoice === "rock"){
            win();
            pScore.innerHTML = playerScore;
        }else if(userchoice === "scissor" && compchoice === "rock"){
            lose();
            cScore.innerHTML = computerScore;
        }else if(userchoice === "scissor" && compchoice === "paper"){
            win();
            pScore.innerHTML = playerScore;
        }
    localStorage.setItem("pscore", playerScore);
    localStorage.setItem("cscore", computerScore);
}