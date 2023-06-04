// ? JUNE 4

//
// !Functions
// -block of codecthat performs a particular task
// - simplified program(s) that run a task
/*
2 diff Types
    - declarations
    - expressions
    


// ? Declaration

structure:

   (1)    (2)
function  hi( {
    code block....
}


1- keyword
2- name of our func, and parenth for a parameter


*** IS HOISTED
    */

function hi() {
  console.log("hi");
}

// ? EXPRESSION

/*!


(1)
let hey = function hello () {
    code block
}

let varname = function functionName()
{
     block...
}
1- the variable "hey" is now representative of the function hello();


**DOES NOT GET HOISTED

*/

let hey = function hello() {
  console.log("hey there!");
};

// ! Invoking   (starting the coffeemaker/ turning it on to do the thing we want it to do)

/*  */

/* 
structure: function nameOfFunction() {

    code block logic...
}

(1)
nameOfFunction();

1- this is how we call, or "invoke" our function
*/

function coffeeMaker() {
  console.log("brewing...");
  return "now it's brewing";
}

coffeeMaker();
// <-- on switch
coffeeMaker;
// < --doesn't turn it on
console.log(coffeeMaker);
console.log(coffeeMaker());
// when we are cosole logging this, it's immediatley logging the function

// ?  HERE IS 41:00 VIDEO MARKER
// meta notes:

// -return is a new keyword
// -console.log(object); is not part of final code(usually); -it's just to check our code.
//     - same thing as "return"

//     example is in eric's folder sample connections in unit-2


// ! create a function that when invoked, will list out numbers i - 10.


// create function:
    
    
function countFunction() {
    for (i = 1; i <= 10; i++){
        console.log(i);
    }
    
}

countFunction();
countFunction();
countFunction();


// this is invoking the code we made inside the code block

// ? HERE AT 1:04 VIDEO MARKER
MORE META

// deprecated means will no longer be used


// quick key:
// ALT SHIFT DOWN ARROW TO COPY LINE DOWN

// !
// given the Array, create function that lists out the values individually.Array

// !    THIS IS WHERE I STOP BEING ABLE TO KEEP UP WITH THE TYPING.
// !   CHOICE IS TYPE AND NOT HEAR, OR HEAR AND NOT TYPE.
// !  IF I TYPE I LOSE TRACK OF THE LESSON
// !  IF I LISTEN, I CAN'T CODE FOLLOW ALONG

let arr = [
    'this', 'is', 'way', 'cool'
];
   

function listValues() {
    for (const word in arr) {
        
        console.log(arr);
        // console.log(arr[word]);  arr['this] OR arr ['is], etc.  IS OR SUPPOSED TO BE OR
    }
}

listValues();


// fell behind:
// ! AAAAAAAAAAAAAAAA
// have to get the correct typing / code line 131 to here  
// ? 1:30 video

/*  */

/*  */

/* parameters and arguments:  provide info to run */

/* 


*/

// ! Parameters

structured

function hi(name)

SCREEN SHOTS

// ? 1:45 VIDEO META




// CHALLENGE"


//         ---- Write a function that takes two parameters:
//         - one parameter is for a first name,
//         - the other parameter is for a last name;
//         - have them come together in a variable inside the function.
//         - console.log 'Hello, my name is <your name>'
//         - call (or invoke) your function


function fullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;


    console.log(`hello, my name is ${fullName}`);
}

fullName("Leroy", "Brown");
fullName("Zephyr", "Mathews");

// alt d   to highlight multiple lines and change all at same time



// !Arguments

// ?    ~ 2:02 marker

// expression is storing the variable      desc1 is our argument

let decs1 = "tall person";
let de


look at the screenshot

/*  */

/*  */
// BREAK

// ! Arrow funtions

/* 
Structure:

let x = ( => {
    code block.....
})


1- need to set the arrow funct w/in a variable.
2- "Fat Arrow" to signify it's a function.


- arrow funct introed in ES6.  They'r basically just a more concisew way to write funct expressions -NOT DECLARATIONS
 --means that arrow functions are NOT hoisted

 Two Types:
 - Concide body
 - Block body

*/

// ? Concise Body  

let conciseArrow = () => console.log("hello");
//  9:55 listen to what he said here, missed it


// ? Block Body
ler blockArrow - () => {
    let a = "a";
    return a;
}

//  passing parameters

let apples = color => `the apple is ${color}`;
console.log(apples("red"));
console.log(apples("green"));
console.log(apples("yellow"));


let fruit = (type, count) => {
    let numOfFruit = count;
    return `there are ${numOfFruit} of ${type}.`;
}

console.log(fruit("apples", 10));
console.log(fruit("pears", 5));
console.log(fruit("berries", 9));


let books = (author, title) => console.log(`"${title}": by ${author}`); books('stephen king', 'it');
// screenshot




// ! Returns  throwing the response   back to a variable that is waiting for the response

/*  

let hi = () => { 

     (1)
    return "hi";
}

let newGreeting = hi();
console.log(newGreeting);

    1- the key...
    2- we need ...
    3- when called ...

*/

let fName = first => {
    return "steve";
}

let myName = fName();
console.log(myName);
function capitalizateName(first) {
    let capName = '';

// ? VIDEO AT 31:00
    
    for (1 in first) {
        if (1 == 0) {
            capName += first[1].toUpperCase();
        } else {
            capName += first[1].toLowerCase();
        }
        return capName;
        }
    }
let nameSet = capitalizeName(myName);
console.log(`${nameSet}, how are you today?`);


// !Something's not correct above


/* - Immediately Invoked Function Expression
-helps allocate space in memory for ananymous function. */

(function () {
    console.log("IIFE Fired");
})();


/*  */
/*  */
