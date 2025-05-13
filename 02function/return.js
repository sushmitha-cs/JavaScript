//any code after return statement will not run
function padRow(name) {
    const test = "Testing";
    console.log("This works!") //Will print this statement in the console
    return test;
  }

  padRow();

  function padCol(name) {
    const test = "Testing";
    return test;
    console.log("This works!") //Will not print this statement in the console
  }

  padCol();  
