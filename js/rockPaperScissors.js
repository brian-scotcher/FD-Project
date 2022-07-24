//VARIABLES

const optionsArr = ["rock", "paper", "scissors"];

let playerScore = 0;
let aiScore = 0;

let aiChoice = computerPlay(optionsArr);

//CREATE ELEMENTS
//score bar and content
const scorebar = document.createElement('div');
scorebar.setAttribute("id", "scorebar");
scorebar.style.display="flex";
scorebar.style.flexDirection="row";
scorebar.style.justifyContent="space-between"

const playerScoreDisplay = document.createElement('p');
const aiScoreDisplay = document.createElement('p');
const playerScoreText = document.createTextNode("Player Score: " + playerScore);
const aiScoreText = document.createTextNode("Computer Score: " + aiScore);
playerScoreDisplay.style.width="fit-content";
aiScoreDisplay.style.width="fit-content";



//game area and content
const gameArea = document.createElement('div');
gameArea.setAttribute("id", "gameArea")


//rock button
const rockBtn = document.createElement("button");
rockBtn.setAttribute('id', 'rockButton');
rockBtn.textContent = 'ROCK';

//paper button
paperBtn = document.createElement("button");
paperBtn.setAttribute('id', 'paperButton');
paperBtn.textContent = 'PAPER';

//Scissors button
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute('id', 'scissorsButton');
scissorsBtn.textContent = 'SCISSORS';


//FUNCTIONS
function gameStart() {
    gameSetup();


}

function gameSetup() {//sets up the start of the game
    //Get Elements
    const rockPaperScissors = document.getElementById("rockPaperScissors");
    const rpsTitle = document.getElementById("rpsTitle");
    const instructions = document.getElementById("instructions");
    const startBtn = document.getElementById("startBtn");

    

    //styling
    instructions.style.display= "none";
    startBtn.style.display= "none";

    //append scorebar and contents
    rockPaperScissors.appendChild(scorebar);
    scorebar.appendChild(playerScoreDisplay);
    scorebar.appendChild(aiScoreDisplay);
    playerScoreDisplay.appendChild(playerScoreText);
    aiScoreDisplay.appendChild(aiScoreText);
    rockPaperScissors.appendChild(gameArea);

}

//Evaluation of player vs computer
function evaluation(user, ai){
    if(user===ai){
        
        return "You both chose the same, It's a draw!";
        
    }else if(user === "rock" && ai=== "scissors"){
        
        return "Rock blunts scissors. You win!";

    }else if(user ==="paper" && ai ==="scissors"){

        return "Scissors cut paper. You lose!"


    }else if(user ==="paper" && ai ==="rock"){
        
        return "Paper wraps rock. You win!";

    }else if(user ==="scissors" && ai ==="rock"){
        
        return "Rock blunts scissors. You lose!";

    }else if(user ==="scissors" && ai ==="paper"){
        
        return "Scissors cut paper. You win!";

    }else if(user ==="rock" && ai ==="paper"){
        
        return "Paper wraps rock. You lose!";

    }
}

  //computer chooses
  function computerPlay(computerOptions){//Computer returns random value from array
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
    
}


//EVENT LISTENERS

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);
