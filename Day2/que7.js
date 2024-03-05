/// All above functions in arrow functions 

// Write a function expression that takes in another function as an argument

const parentFunction =  (func) =>{
    console.log("Krishna Sir is giving Training  to us");
    func();
}

const insideFunction=() =>{
    console.log("I am taking trainin from hnim")
}

parentFunction(insideFunction);



//  Write a function expression that takes in a number and returns its square.


const square = (num ) =>  num*num;
console.log(square(5));

// Write a function expression that takes in two numbers and returns their sum.

const sum = (a,b) => a + b;
console.log(sum(5, 10));


// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const isEven = (num) => num % 2 ==0;
console.log(isEven(10));
console.log(isEven(9));