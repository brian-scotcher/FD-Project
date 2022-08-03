//----ROCK PAPER SCISSORS-----
//VARIABLES

const optionsArr = ["rock", "paper", "scissors"];

let userInputArr = [];

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
const roundText = document.createTextNode("Round: " + round);
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
const gameResultDisplay = document.createElement('p');
const gameResetBtn = document.createElement('button');
let gameStatusText = document.createTextNode("Choose one.");
gameResultText = document.createTextNode("");
gameStatusDiv.setAttribute('id', "gameStatusDiv");
gameStatusDiv.style.display = "flex";
gameStatusDiv.style.flexDirection = "column";
gameStatusDiv.style.alignSelf = "center";
gameStatusDiv.style.marginTop = "30px";
gameResultDisplay.style.alignSelf = "center";
gameResultDisplay.style.padding = "5px";
gameResultDisplay.appendChild(gameResultText);
gameStatusDiv.appendChild(gameResultDisplay);
gameResetBtn.setAttribute('id', 'resetGame');
gameResetBtn.style.marginTop = '10px'
gameResetBtn.textContent = "Play again.";





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
    rockBtn.addEventListener("click", () => {
        playRound(rockBtn.value)
    });
    paperBtn.addEventListener("click", () => {
        playRound(paperBtn.value);
    });
    scissorsBtn.addEventListener("click", () => {
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
    let playerChoice = playerInput;

    let winner = evaluation(playerChoice, aiChoice);
    gameStatusText.nodeValue = winner;

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

function scoreKeeper(result) {//updates score by checking if evaluation return contains words "win" or "lose".
    if (result.includes("win")) {
        playerScore++;
        playerScoreText.nodeValue = "Player Score: " + playerScore;
    }
    if (result.includes("lose")) {
        aiScore++;
        aiScoreText.nodeValue = "Computer Score: " + aiScore;
    }
}

//keeps rounds and also provides reset.
function roundKeeper() {
    round++;

    roundText.nodeValue = "Round: " + round;

    if (round == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        if (playerScore > aiScore) {
            gameResultText.nodeValue = "You won!"

        }
        if (playerScore < aiScore) {
            gameResultText.nodeValue = "You lost!"

        }
        if (playerScore == aiScore) {
            gameResultText.nodeValue = "It's a tie!";

        }
        gameResultDisplay.style.backgroundColor = "#DD6E42";
        gameResultDisplay.style.borderRadius = "5px";
        gameStatusDiv.appendChild(gameResultDisplay);
        gameStatusDiv.appendChild(gameResetBtn);

        gameResetBtn.addEventListener("click", () => {
            restart()
        });

        function restart() {

            if (round = 5) {

                playerScore = 0;
                aiScore = 0;
                round = 0;

                roundText.data = "Round: " + round;
                playerScoreText.data = "Player score: " + playerScore;
                aiScoreText.data = "Computer Score: " + aiScore;
                gameResultDisplay.remove();
                gameResetBtn.remove();


                rockBtn.disabled = false;
                paperBtn.disabled = false;
                scissorsBtn.disabled = false;

            }
        }

    }


}

//----CALCULATOR-----

let zero = 0;

const values = [
    //["C", "%", "/", "*"],
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [".", 0, "=", "+"],
];

let inputArr = [];


const calculatorDiv = document.getElementById("calculatorDiv");
calculatorDiv.style.display = "flex";


//calculator display

const calculatorDisplayDiv = document.createElement('div');
const calculatorTextDisplay = document.createElement('input');

calculatorDisplayDiv.setAttribute('id', 'calculatorDisplayDiv');
calculatorTextDisplay.setAttribute("type", "text");
calculatorTextDisplay.setAttribute("value", zero);
calculatorTextDisplay.setAttribute("id", "calculatorTextDisplay");

calculatorDiv.appendChild(calculatorDisplayDiv);
calculatorDisplayDiv.appendChild(calculatorTextDisplay);

calculatorDisplayDiv.style.backgroundColor = '#FDFDFF';
calculatorDisplayDiv.style.display = 'flex';
calculatorDisplayDiv.style.width = "100%";
calculatorDisplayDiv.style.border = "0";

calculatorDisplayDiv.style.borderRadius = '5px';
calculatorTextDisplay.style.color = '#001B2E';
calculatorTextDisplay.style.font = '30px "robotoBold", sans-serif';
calculatorTextDisplay.style.textAlign = "right";
calculatorTextDisplay.style.width = "100%";
calculatorDisplayDiv.style.margin = '0px 0px 10px 0px';

//Calculator cancel/clear button
const calcClearDiv = document.createElement('div');
const calcClearBtn = document.createElement('button')
calcClearDiv.setAttribute('id', 'calcClearDiv');
calcClearBtn.setAttribute('id', 'calcClearBtn');

calcClearDiv.style.width = "100%";
calcClearDiv.style.display = "flex";
calcClearDiv.style.marginBottom = "10px";
calcClearBtn.textContent = "C"

calcClearBtn.style.display = "block";
calcClearBtn.style.width = "auto";
calcClearBtn.style.padding = "0px 20px";
calcClearBtn.style.height = "50px";
calcClearBtn.style.font = '25px "robotoBold", sans-serif'
calcClearBtn.style.backgroundColor = "#001B2E";
calcClearBtn.style.borderColor = "#FDFDFF";
calcClearBtn.style.color = "#FDFDFF";

calculatorDiv.appendChild(calcClearDiv);
calcClearDiv.appendChild(calcClearBtn);



//Buttons Div and content
const calculatorBtnsDiv = document.createElement('div');
calculatorBtnsDiv.setAttribute('id', 'calculatorBtnsDiv');
calculatorBtnsDiv.style.display = "flex";
calculatorBtnsDiv.style.flexDirection = "column";
calculatorDiv.appendChild(calculatorBtnsDiv)

createButtons(values);

//FUNCTIONS
//Creates number and operator buttons using "values" array. Also includes event listeners.
function createButtons(buttonValues) {

    for (let i = 0; i < buttonValues.length; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = "flex";
        rowDiv.style.flexDirection = "row";
        rowDiv.setAttribute('id', 'row' + i);
        calculatorBtnsDiv.appendChild(rowDiv);

        for (let j = 0; j < buttonValues.length; j++) {
            const btn = document.createElement('button')

            btn.style.display = "block";
            btn.style.width = "100px";
            btn.style.height = "80px";
            btn.style.font = '35px "robotoBold", sans-serif'

            btn.style.backgroundColor = "#C4CBCA";
            btn.style.borderColor = "#FDFDFF"

            btn.setAttribute('id', buttonValues[i][j]);
            btn.setAttribute('value', buttonValues[i][j]);
            btn.textContent = buttonValues[i][j];

            rowDiv.appendChild(btn);

            if (btn.value == '=') {
                btn.style.backgroundColor = "#DD6E42";

            }

            var btnID = document.getElementById(buttonValues[i][j])

            //console.log(btnID);

            //Event Listener for every number and operator button created 
            btnID.addEventListener('click', function () {
                //console.log(this.value);
                userInput(this.value);
            })
        }
    }
}

//User input using UI buttons
function userInput(value) {
    if (value != "=") {
        inputArr.push(value);
        console.log(inputArr);
        calculatorTextDisplay.value = inputArr.join("");

    }

    if (value == "=") {

        calculatorTextDisplay.value = calculateSum(inputArr.join(""));

    }



}



//Calculate total
function calculateSum(inputStr) {

    if (inputArr.length === 0) {
        return zero;
    }

    if (inputArr.length > 0) {
        console.log(inputStr);
        let total = eval(inputStr);
        console.log(total);
        return total;
    }


}

function resetCalculator() {
    inputArr.length = 0;
    calculatorTextDisplay.value = zero;
}

//Event Listers
calcClearBtn.addEventListener('click', function () {
    resetCalculator();
})
