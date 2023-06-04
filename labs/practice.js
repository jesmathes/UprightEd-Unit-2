// ? the FOR Loop

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     continue;
//   }

//   if (i === 7) {
//     break;
//   }

//   console.log(i);
// }

// // ? WHILE Loops

// let i = 0;

// while (i < 10) {
//   console.log(i);

//   i++;
// }

// // ? DO WHILE Loop

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i < 10 && i > 0);

// // ? the FOR IN Loop

// works for string based properties

// const person = {
//     name: "Leroy",
//     age: 13,
//     job: "best"
// };

// for (const prop in person) {
//     console.log(person[prop]);
// }

// ?the FOR OF Loop
// loop over iterable objects
// like looping thru arrays OR a  node list.

// const numbers = [2, 3, 5];
// for (const n of numbers) {
//     console.log(n);
// }

// you cann access a node list by running a query selector https://youtu.be/LuAWFium1nk?t=522

// // ? the FOR EACH Loop
// is ran directly on arrays...
// to iterate thru

// const numbers = [4, 6, 7];

// // specify a call back function

// numbers.forEach(n, i)

// goes on: watch linked video -- advanced enuf 2 wait 4 now
function removeCharacter(position) {
  originalString = "str";

  newString =
    originalString.substr(0, position - 1) +
    originalString.substr(position, originalString.length);
  document.querySelector(".outout").textContent = newString;
}
