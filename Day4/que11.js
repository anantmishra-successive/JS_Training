// Write a program to sort an array 

const sort = (arr)=>{
    arr.sort((a,b)=>a-b);
    return arr;
}

let array = [21,2,2,13,43,43,2,5,4,211,345,43,664,3,34,56];

console.log(sort(array));