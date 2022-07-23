
//start rock paper scissors game
function startGame(){
    //hides start button and instructions
    document.getElementById("rpsInstructions").style.display = "none";
    document.getElementById("startButton").style.display = "none";

    //create divs
    //div for game
    const rpsBtnArea = document.createElement('div');

    //div and p for results
    const resultArea=document.createElement('div');
    
    resultArea.setAttribute("id", "resultArea")
    resultArea.style.flex="1";
    
    const userChoiceText=document.createElement('p');
    const aiChoiceText=document.createElement('p');
    const result=document.createElement('p');

    //create buttons
    //rock
    const rockBtn = document.createElement("button");
    rockBtn.setAttribute('id', 'rockButton');
    rockBtn.textContent = 'ROCK';
    
    //paper
    const paperBtn = document.createElement("button");
    paperBtn.setAttribute('id', 'paperButton');
    paperBtn.textContent = 'PAPER';

    //Scissors
    const scissorsBtn = document.createElement("button");
    scissorsBtn.setAttribute('id', 'scissorsButton');
    scissorsBtn.textContent = 'SCISSORS';
    
    //add buttons to DOM
    document.getElementById("rockPaperScissors").appendChild(rpsBtnArea);
    rpsBtnArea.appendChild(rockBtn);
    rpsBtnArea.appendChild(paperBtn);
    rpsBtnArea.appendChild(scissorsBtn);
    
    //Array for options
    const optionsArr=["rock", "paper", "scissors"];

    //FUNCTIONS
    //computer chooses
    function computerPlay(computerOptions){//Computer returns random value from array
        return computerOptions[Math.floor(Math.random()*computerOptions.length)];
        
    }

    let aiChoice = computerPlay(optionsArr);
    
    //player choice
    function rockClicked() {
        if (rockClicked=true){
            declareWinner(optionsArr[0]);
        }
    }

    function paperClicked() {
        if (paperClicked=true){
            declareWinner(optionsArr[1]);
        }
    }

    function scissorsClicked() {
        if (scissorsClicked=true){
            declareWinner(optionsArr[2]);
        }
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

    //declares winner and styles text
    function declareWinner(userChoice){
        /*console.log("You chose " + userChoice)
        console.log("Computer chose " + aiChoice);
        console.log(evaluation(userChoice, aiChoice));*/
        document.getElementById("rockPaperScissors").appendChild(resultArea);


        function style_P_Tags(pElements){
            pElements.style.fontFamily="sans-serif";
            pElements.style.color="rgb(187, 255, 148)";
        }

        style_P_Tags(result);
        style_P_Tags(userChoiceText);
        style_P_Tags(aiChoiceText);
        
        resultArea.appendChild(userChoiceText);
        resultArea.appendChild(aiChoiceText);
        resultArea.appendChild(result);

        userChoiceText.textContent= "You chose " + userChoice;
        aiChoiceText.textContent= "Computer chose "+aiChoice;
        result.textContent = evaluation(userChoice, aiChoice);
    }

    //event listeners
    rockBtn.addEventListener("click", rockClicked);
    paperBtn.addEventListener("click", paperClicked);
    scissorsBtn.addEventListener("click", scissorsClicked);

    
    
    
}