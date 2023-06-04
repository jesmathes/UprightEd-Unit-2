//! Conditionals
/* 
    Falsy
        - false
        - 0
        - empty strings ( "", '' )
        - null
        - undefined
        - NaN (not a number)
    Conditionals evaluates an expression and responds if it is true.
*/

let isOn = true;

if (isOn == true) {
  console.log("The light is on!");
}

/* Structure
    if(expression condition evaluated) {
        code that runs if expression is true
    }
*/
let isOn = true;
if (isOn) {
  console.log("There is light!");
}

isOn = false;
if (isOn == false) {
  console.log("The light is off...");
}

//! Else - If Else Statement
let weather = 65;

if (weather < 70) {
  console.log("Wear a jacket.");
} else {
  console.log("No jacket needed!");
}

let rain = true;

if (rain && weather < 70) {
  console.log("Wear a jacket and boots.");
} else {
  console.log("No boots needed.");
}

rain = false;
if (weather < 70 || rain) {
  console.log("Get your rain jacket");
} else {
  console.log("Going to be nice.");
}

/*
Use this string: let name = 'sAmwISe';
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = "sAmwISe";

// ! MAY 30

// once a condition is met, it runs the code block.
// Order matters

let grade = 0;

// ? get this bit from eric's gitnotes

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

// let age = 17;

// if (age < 18) {
//     console.log("You can vote!")
// }
// console.log(age);
