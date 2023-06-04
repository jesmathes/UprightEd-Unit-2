// ! May 30th
/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 19;

if (age <= 17) {
  console.log("nothing!");
} else if (age >= 25) {
  console.log("rent car");
} else if (age >= 21) {
  console.log("drink");
  // } else if (age >= 18) {
  //   console.log("vote");
} else {
  console.log("vote");
}

// ! SWITCH STATEMENTS

/*
KEYWORDS:
-swithc
-case
-break
-default

frame -

switch (expression){
  case :
      break;
      default
}

*/

let officeChar = "Pam";

switch (officeChar) {
  case "Michael":
    console.log("Mind mile minute");
    break;
  case "Dwight":
    console.log("schaedenfreud");
    break;
  case "Jim":
    console.log("BSG");
    break;
  default:
    // console.log("who you?");
    // console.log("who you, Pam?");
    console.log(`I'm sorry ${officeChar}, yo no know you`);
}

// string interpolation - template literal (with a name that isn't already listed sas a value.)

// ? break

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "Creme Brulee";

switch (dessert) {
  case "Pie":
    console.log("Pie, pie, me oh my!");
    break;
  case "Cake":
    console.log("Cake is great!");
    break;
  case "Ice Cream":
    console.log("I scream for ice cream!");
    break;
  default:
    console.log("Not on the menu.");
}

//? these were single case conditions above

let num = -40;

switch (true) {
  case num < 0 && num > -10:
    console.log("case 1 ran");
    break;
  case num < 0:
    console.log("case 2 ran");
    break;
  default:
    console.log("did not work");
    break;
}

// ! Ternary
//  short cut/hand for easy wat of writing these... can make little more efficiently

let number = 6;

if (number > 0) {
  console.log("yes");
} else {
  console.log("no");
}

number > 0 ? console.log("yes") : console.log("no");

or(number > 0) ? console.log("yes") : console.log("no");

//  ternaries require an "else to the "if statement

// * Else/If

number = 8;

if (number === 0) {
  console.log("hi");
} else if ((number, 0)) {
  console.log("ho");
} else {
  console.log("bye");
}

number === 0
  ? console.log("hi")
  : number < 0
  ? console.log("ho")
  : console.log("bye");
