function abc(){
    i = 10;
}

function pqr(){
    console.log(i)
}

abc();
pqr(); //this will print 10 as i is not decalared and it will be automatically considered  as a Global variable

function sus(){
   const f = 10;
}

function pri(){
    console.log(f)
}

sus();
pri();//this will throw an error as f is local variable