// ? JUNE4  55:00 VIDEO

GLOBAL SCOPE CONTAINS THE OTHERS
SCREENSHOT @4: 24PM


have two variable down .. has a new variable x. but it has it's own scope in the curly brackets, why I can have two the same name

let x = 12;

function scope() {
    let x = 33; 
    // new variable

    console.log(x);
}

scope();
console.log(x);


let y = 12;

function scope2()  {
    y = 33;
    console.log(y);
}

console.log(y);
scope2();

/*   variable keywords
    -const: cant be reassigned
    -var: scoped to nearesr function block
    -let: scoped to the nearest enclosing block  */

    // * Var

var v = 12;

function varTest() {
    var v = 33;

    if (true) {
        var v = 45;
        console.log(`var - within IF: ${v}`);
    }

    console.log(`var - outside IF: ${v}`);

}

varTest();
// console.log((`var - outside function: ${v}`)); 12
// ? VIDEO MARKER 1:12 
//  SCREENSHOT



// the let example
let l = 12;

function letTest() {
    let l = 33;

    if(true) {
        let l = 45;
        console.log(`let - within IF: ${l}`);
    }
    console.log(`let - outside IF: ${l}`);
}

letTest();
console.log(`let - outside Function: ${l}`);

// ! hoisting 

/*   -JS reads from top to bottom
blablabla  


1st pass:
    - made by the compiler. this is where hoisting is initiated.
    -compiled for execution.
2nd pass:
    - variable assigned
    -executes any hoisted code
*/

// ? VIDEO 1:25 ~

// console.log(firstName);

let firstName = "Beverly";

console.log(firstName);

b();
function b() {
     console.log("i've been hoisted!");
}
 

let notHoisted = () => console.log('not Fing hoisted');
notHoisted();


// ? 1:41 how to fork project from repo
/*     */
/*     */