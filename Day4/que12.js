// Write a program to display intersection of two array

const intersectionOfArrays = (arr1,arr2)=>{
    const ans = arr1.filter(i=>arr2.indexOf(i) !== -1)
    return ans;
}

const arr1 = [2,3,4,5,6,7,8,9];
const arr2 = [5,6,7,8,21,12,31];

console.log(intersectionOfArrays(arr1,arr2));