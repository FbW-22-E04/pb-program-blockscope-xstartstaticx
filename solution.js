// 1
let determiner = -50;
let x;

// if (determiner < 0) {
//   console.log((x = Math.floor(Math.random() * -100)));
// } else {
//   console.log((x = Math.ceil(Math.random() * 100)));
// }
if (determiner < 0) {
  console.log((x = "Less than 0"));
} else {
  console.log((x = "Greater or equal to 0"));
}

// 2
let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive integer";
  console.log(message);
} else {
  updater = "Less than 0";
  console.log(updater);
}
// Question: You get an error, message is not defined

// 3
/**
 * One reason to use if / else statements instead of the ternary operators is when you would like to have more than two outcomes such as when you are writing an else if within your if /else statement. If you find yourself needing to check more than one condition, the if / else statement with else if inside of it is more than likely the way to go.

One great time to use the ternary operator instead of the if / else statement is whenever you would otherwise use a simple if / else statement. Anything that can fit in a single line of code is a great time to use the ternary operator because it’s much more compact and easy to read. Ternary operators are also great for when you want to set a value to a given variable.
 */
