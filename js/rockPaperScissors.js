//VARIABLES

const optionsArr = ["rock", "paper", "scissors"];

let playerScore = 0;
let aiScore = 0;
let round = 0;

//CREATE ELEMENTS
//score bar and content
const scorebar = document.createElement('div');
scorebar.setAttribute("id", "scorebar");
scorebar.style.display = "flex";
scorebar.style.flexDirection = "row";
scorebar.style.justifyContent = "space-between";
scorebar.style.marginBottom = "20px";


const playerScoreDisplay = document.createElement('p');
const aiScoreDisplay = document.createElement('p');
const roundDisplay = document.createElement('p');
const playerScoreText = document.createTextNode("Player Score: " + playerScore);
const aiScoreText = document.createTextNode("Computer Score: " + aiScore);
const roundText = document.createTextNode("Round: "+ round);
playerScoreDisplay.style.width = "fit-content";
aiScoreDisplay.style.width = "fit-content";
roundDisplay.style.width = "fit-content";

//game area and content
const btnContainer = document.createElement('div');
btnContainer.setAttribute("id", "btnContainer");
btnContainer.style.display = "flex";
btnContainer.style.flexDirection = "row";
btnContainer.style.justifyContent = "space-between";
btnContainer.style.padding = "0px 200px";

//game status div and content
const gameStatusDiv = document.createElement('div');
const gameStatusDisplay = document.createElement('p');
let gameStatusText = document.createTextNode("Choose one.");
gameStatusDiv.setAttribute('id', "gameStatusDiv");
gameStatusDiv.style.display = "flex";
gameStatusDiv.style.alignSelf = "center";
gameStatusDiv.style.marginTop="30px";



//rock button
const rockBtn = document.createElement("button");
rockBtn.setAttribute('id', 'rockButton');
rockBtn.setAttribute('value', 'rock');
rockBtn.textContent = 'ROCK';

//paper button
const paperBtn = document.createElement("button");
paperBtn.setAttribute('id', 'paperButton');
paperBtn.setAttribute('value', 'paper');
paperBtn.textContent = 'PAPER';

//Scissors button
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute('id', 'scissorsButton');
scissorsBtn.setAttribute('value', 'scissors');
scissorsBtn.textContent = 'SCISSORS';


//FUNCTIONS
function gameStart() {
    gameSetup();

    //EVENT LISTENERS
    rockBtn.addEventListener("click", ()=>{
        playRound(rockBtn.value)
    });
    paperBtn.addEventListener("click", ()=>{
        playRound(paperBtn.value);
    });
    scissorsBtn.addEventListener("click", ()=>{
        playRound(scissorsBtn.value);
    });

}

function gameSetup() {//sets up the start of the game
    //Get Elements
    const rockPaperScissors = document.getElementById("rockPaperScissors");
    const rpsTitle = document.getElementById("rpsTitle");
    const instructions = document.getElementById("instructions");
    const startBtn = document.getElementById("startBtn");

    //styling
    instructions.style.display = "none";
    startBtn.style.display = "none";

    //append scorebar and contents
    rockPaperScissors.appendChild(scorebar);
    scorebar.appendChild(playerScoreDisplay);
    scorebar.appendChild(roundDisplay);
    scorebar.appendChild(aiScoreDisplay);
    playerScoreDisplay.appendChild(playerScoreText);
    roundDisplay.appendChild(roundText);
    aiScoreDisplay.appendChild(aiScoreText);

    //append game area and contents
    rockPaperScissors.appendChild(btnContainer);
    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);

    //game status div and contents
    rockPaperScissors.appendChild(gameStatusDiv);
    gameStatusDiv.appendChild(gameStatusDisplay);
    gameStatusDisplay.appendChild(gameStatusText);
}

function playRound(playerInput) {

    let aiChoice = computerPlay(optionsArr);
    let playerChoice= playerInput;
    
    let winner= evaluation(playerChoice, aiChoice);
    gameStatusText.nodeValue=winner;
    
    scoreKeeper(winner);
    roundKeeper();
    
}

//Evaluation of player vs computer
function evaluation(user, ai) {
    if (user === ai) {

        return "You both chose the same, It's a draw!";

    } else if (user === "rock" && ai === "scissors") {
        return "Rock blunts scissors. You win!";

    } else if (user === "paper" && ai === "scissors") {

        return "Scissors cut paper. You lose!"

    } else if (user === "paper" && ai === "rock") {

        return "Paper wraps rock. You win!";

    } else if (user === "scissors" && ai === "rock") {

        return "Rock blunts scissors. You lose!";

    } else if (user === "scissors" && ai === "paper") {

        return "Scissors cut paper. You win!";

    } else if (user === "rock" && ai === "paper") {

        return "Paper wraps rock. You lose!";

    }
}

//computer chooses
function computerPlay(computerOptions) {//Computer returns random value from array
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function scoreKeeper(result){//updates score by checking if evaluation return contains words "win" or "lose".
if(result.includes("win")){
    playerScore++;
    playerScoreText.nodeValue="Player Score: " + playerScore;
}
if (result.includes("lose")){
    aiScore++;
    aiScoreText.nodeValue="Computer Score: " + aiScore;
}
}

function roundKeeper(){
    round++;

    roundText.nodeValue="Round: "+round;
}


