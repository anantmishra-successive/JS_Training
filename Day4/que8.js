// Write a program to remove dupliacte elements from an array

const removeDuplicates = (arr) => {
const newArr = [... new Set (arr)];
console.log(newArr);
}

let arr = [1,21,2,1,21,21,2,3,4,2,4,2,12,4]
removeDuplicates(arr);