// Write a function expression that takes in another function as an argument

const parentFunction =  (func) =>{
    console.log("Krishna Sir is giving Training  to us");
    func();
}

const insideFunction=() =>{
    console.log("I am taking trainin from hnim")
}

parentFunction(insideFunction);