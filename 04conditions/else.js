/*if (condition) {
  // this code will run if condition is true
} else if (condition2) {
  // this code will run if the first condition is false
} else {
  // this code will run 
  // if the first and second conditions are false
}*/


if ("") {
  console.log("Condition is true"); //Will not print as the condition has falsy value
} else if (5 > 10) {
  console.log("5 is less than 10"); //Will not print as the condition is false
}else{
  console.log("This is the else block"); //will print as the above two conditions are false
}