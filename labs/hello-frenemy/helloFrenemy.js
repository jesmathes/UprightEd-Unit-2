// function respond(name) {
//   // enter your name through name parameter
//   if (name) {
//     /* check if their name is 'darth vader' */
//     /* tell them to go away */
//   } else {
//     /* greet them warmly by their name */
//   }
// }

// respond("darth vader");
// // should print 'Noooooo! That's impossible!'
// respond("lex luthor");
// // should print 'Be gone, you villian!!!'
// respond("luke skywalker");
// // should print 'Hello luke skywalker, you are a wonderful friend!'

// function greeter(name) {
//   if ((name = "darth vader")) {
//     console.log("Noooooo! That's impossible!");
//   } else if ((name = "lex luthor")) {
//     console.log("Be gone, you villian!!!");
//   } else {
//     console.log("hello!");
//   }
// }
// greeter("lex luthor");
// greeter("darth vader");

// // should print 'Noooooo! That's impossible!'
// greeter("lex luthor");
// // should print 'Be gone, you villian!!!'
// greeter("luke skywalker");
// // should print 'Hello luke skywalker, you are a wonderful friend!'

function greeter(name) {
  if (name === "darth vader") {
    console.log("Noooooo! That's impossible! Go away!!!");
  } else if (name === "lex luthor") {
    console.log("Be gone, you villain!!!");
  } else if (name === "luke skywalker") {
    console.log("Hello, luke skywalker, you are a wonderful friend!");
  } else {
    console.log("Hello, " + name + "!!!");
  }
}

// greeter("darth vader");
// greeter("lex luthor");
// greeter("luke skywalker");
greeter("giraffe");
