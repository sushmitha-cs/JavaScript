//while loop syntax
/*while (condition) {
  logic;
}*/


let counter = 0;

while (counter < 5) {
  console.log("The counter is: " + counter);
  counter++; // Important: Increment the counter to avoid an infinite loop
}

console.log("Loop finished!");