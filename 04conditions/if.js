//if loop syntax
/*if (condition) {
  logic
}*/

if(true){
  console.log("Condition is true") //prints as the condition is true
}
if(false){
  console.log("Condition is false") //Will not print anything as the condition is false
}
if("false"){
  console.log("Condition is true or false") //prints beacuse "false" a string, when evaluated to a boolean becomes true. This means "false" is a truthy value
}

if ("") {
  console.log("Condition is true"); //Will not print anything as "" is a falsy value
}
