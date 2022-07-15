//Assignment 2A

let diagonalLength = x => Math.sqrt(Math.pow(x, 2)*2);//finds diagonal length of a square

console.log("Assignment 2A answer: " + diagonalLength(9))

/*this is the arrow function version of the below fucntion, but only taking one variable so both x and y axis would be the same length

const x = 9;
const y = 9;
function diagonalLength() {
    z= Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return z;
    }
console.log("Diagonal length of x by y: " + diagonalLength())

The formula for finding the diagnonal of a square in JS is adding the lenth of x and y to the power of 2 and square rooting that number.
In this example it would look like 
sqrt(9^2)+(9^2). Because the lëngth of x and y in this case are the same length, we could use sqrt(9^2)*2
>Writing it this way allows for x and y to be changed and the formula will still work.
*/

//Assignment 2B
function triangleArea(){//Finds area of a triangle
    let a=5;
    let b=6;
    let c=7;
    const semiPerimeter = (a+b+c)/2; //Gets semi-perimeter
    const area= Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c)); 
    return area.toFixed(2)
}

console.log("Assignment 2B answer: "+triangleArea())
/*Using Heron's Formula, we can get the area of a triangle */

//Assignment 2C

function circleCircumference(radius){
    const circumference= 2*Math.PI*radius;
    return circumference.toFixed(2);
}
function circleArea(radius){
    const area= Math.PI*radius*radius;
    return area.toFixed(2);
}
console.log("Assignment 2C answer: "+circleCircumference(4))
console.log("Assignment 2C answer: "+circleArea(4))

//Assignment 3
function largerNumber(){//Tells user which is the larger number
let number1=window.prompt("Enter a number between 1 and 100");
let number2=window.prompt("Enter a number between 1 and 100");

// || is the logical OR operator
if (isNaN(number1)|| isNaN(number2)){
    alert("You must use only numbers")
}else if (number1 <1 || number1 > 100){
    alert("Your first number wasn't between 1 and 100")
}else if(number2 <1 || number2 > 100){
    alert("Your second number wasn't between 1 and 100")
}else if(number1>number2){
    alert(number1+" is higher.")
}else if (number2>number1){
    alert(number2+" is higher.")
}else if (number1===number2){
    alert("Both numbers are the same")
}else{
    alert("Ohh dear. There's an error -_-")
}
}

function oddOrEven(){//Tells user if their number is odd or even
    let number1=window.prompt("Enter a number");

    if (isNaN(number1)){
        alert("You must use only numbers")
    }else if(number1 % 2 == 0 ){
        alert("Your number is even")
    }else{
        alert("Your number is odd")
    }
}

//Assignment 4

function rockPaperScissors(){//The Rock Paper Scissors game
    alert("Welcome to Rock, Paper, Scissors game.")
    
    const userOptions=["rock", "paper", "scissors"];

    function userTurn(){//asks user to enter their choice and converts to lowercase.
        let userInput = prompt("It's your turn. Choose \"Rock\", \"Paper\", or \"Scissors\"")
        let userChoice = userInput.toLowerCase();
        return userChoice;
    }

    function computerTurn(){//Computer returns random value from array
        const computerOptions=["rock", "paper", "scissors"];
        return computerOptions[Math.floor(Math.random()*computerOptions.length)];
        
    }

    //Stores output of above function outputs into varibales
    let user = userTurn();
    let ai = computerTurn();

    //console.log("computer chooses: "+computerTurn())
    //console.log("user chooses: "+userTurn())

    //Checks user input is valid
    if(userOptions.includes(user)){
        //evaluates the winner and prints statement.
        if(user===ai){
            console.log("Computer chose "+ ai)
            console.log("You chose " + user)
            console.log("You both chose the same, It's a draw!")
            console.log("----------")
        }else if(user === "rock" && ai=== "scissors"){
            console.log("Computer chose "+ ai)
            console.log("You chose " + user)
            console.log("Rock blunts scissors. You win!")
            console.log("----------")
        }else if(user ==="paper" && ai ==="scissors"){
            console.log("Computer chose "+ ai)
            console.log("You chose " + user)
            console.log("Scissors cut paper. You lose!")
            console.log("----------")
        }else if(user ==="paper" && ai ==="rock"){
            console.log("Computer chose "+ ai)
            console.log("You chose " + user)
            console.log("Paper wraps rock. You win!")
            console.log("----------")
        }else if(user ==="scissors" && ai ==="rock"){
            console.log("Computer chose "+ ai)
            console.log("You chose " + user)
            console.log("Rock blunts scissors. You lose!")
            console.log("----------")
        }else if(user ==="scissors" && ai ==="paper"){
            console.log("Computer chose "+ ai)
            console.log("You chose " + user)
            console.log("Scissors cut paper. You win!")
            console.log("----------")
        }else if(user ==="rock" && ai ==="paper"){
            console.log("Computer chose "+ ai)
            console.log("You chose " + user)
            console.log("Paper wraps rock. You lose!")
            console.log("----------")
        }
    }else{
        alert("You must choose \"Rock\", \"Paper\", or \"Scissors\". It is NOT case sensitive");
        
    }
    
}



