//Assignment 2A JS


let diagonalLength = x => Math.sqrt(Math.pow(x, 2)*2);
console.log("arrow function: " + diagonalLength(9))


/*this is the arrow function version of the below fucntion, but only taking one variable so both x and y axis would be the same length*/


/*
const x = 9;
const y = 9;
function diagonalLength() {
    z= Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return z;
    }
console.log("Diagonal length of x by y: " + diagonalLength())*/
/*The formula for finding the diagnonal of a square in JS is adding the lenth of x and y to the power of 2 and square rooting that number.
In this example it would look like 
sqrt(9^2)+(9^2). Because the lëngth of x and y in this case are the same length, we could use sqrt(9^2)*2
>Writing it this way allows for x and y to be changed and the formula will still work.
*/

//Assignment 2B
function triangleArea(){
    let a= 5;
    let b= 6;
    let c= 7;
    return area= 
}