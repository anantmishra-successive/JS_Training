// 1. Write a program to iterate over object.

const obj = {
    x:5,
    y:3,
    z:1,
}

const objIterate = (object) =>{
    for(let key in object) {
    
        value = object[key];
        console.log(key ,":" ,value);
    
}
}

objIterate(obj)