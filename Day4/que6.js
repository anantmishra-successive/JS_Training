// 6. Write a program to find sum of an array

const findSum = (arr) => {
return arr.reduce((acc,curr)=>{
    acc = acc+curr;
    return acc;
},0);
}
let arr = [1,2,3,4,4,5,6];
console.log(findSum(arr));