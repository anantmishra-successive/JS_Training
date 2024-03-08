
//4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.



const obj={
    a:1,
    b:2,
    c:3,
    d:4,
}

const deepClone = (obj)=>{
    return JSON.parse(JSON.stringify(obj))
}   


console.log(deepClone(obj))