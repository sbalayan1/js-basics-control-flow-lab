//Write a function that takes 2 parameters.  Return the two parameters multiplied by each other.
//Write a function that takes 2 parameters. Return the two parameters added together.
//Write a function that takes 2 parameters. Return the two parameters subtracted from one another.
//Write a function called doMath with a parameter defined as someMath. Invoke someMath with the arguments 10 and 5,  within doMath
//Invoke doMath 3 times, each time passing it each of the 3 functions you defined for 1, 2, and 3. Observe the results. 

let x,y; 

function multiply(x,y) {
    return x*y;  
}

function add(x,y) {
    return x+y; 
}

function subtract(x,y) {
    return x-y; 
}

function doMath(someMath) {
    return someMath(10,5);
}

doMath(multiply);

doMath(add);

doMath(subtract);


const favFood = steak; 

function isHungry(hungry) {
    
}