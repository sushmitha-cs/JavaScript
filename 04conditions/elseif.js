//Syntax of ElseIf
/*if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
}*/


if ("") {
  console.log("Condition is true"); // Will not print as the condition has falsy value
} else if (5 > 10) {
  console.log("5 is less than 10"); // Will not print as the condition is false
}
else if (5 < 10) {
  console.log("5 is less than 10"); // Will print as the condition is true
}