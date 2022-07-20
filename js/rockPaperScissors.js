//start rock paper scissors game
function startGame(){
    //hides start button and instructions
    document.getElementById("rpsInstructions").style.display = "none";
    document.getElementById("startButton").style.display = "none";

    //create rock paper scissors buttons
    let rockBtn = document.createElement("button");
    let paperBtn = document.createElement("button");
    let scissorsBtn = document.createElement("button");

    //text for buttons
    rockBtn.innerText="Rock"
    paperBtn.innerText="Paper"
    scissorsBtn.innerText="Scissors"

    const rpsDiv = Element.querySelector(rockPaperScissors);
    rpsDiv.appendChild(rockBtn);
}