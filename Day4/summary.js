// 1. Write a program to remove duplicate charecters from a string 

const removeDuplicates = (string)=>{
    let str1 = string.split("");
   let str2 = [... new Set(str1)]
   console.log(str2.join(""))
   
}
removeDuplicates("Hello Yellow")


console.log("")
// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")



const reverse=(string)=>{
    let str1 = string.split(" " );
    let ans=[];
    
    for(i of str1){
     
    let str2= i.split("").reverse().join("")
    ans.push(str2)
    
    }
    console.log(ans.join(" "));
    }
    reverse("Hello John");


    console.log("")
    // 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")


const counting=(s)=>{
    let freqObj={};

    for(let i=0;i<s.length;i++)
    {
        if(freqObj[s[i]])
        freqObj[s[i]]+=1;
        else
        freqObj[s[i]]=1;
    }
    console.log(freqObj);
    
    let ans ="";
    for(i in freqObj){
      ans = ans+i+freqObj[i];
    }
    return ans;
}


console.log(counting("abcabcdabbcc"))


console.log("")

// Write a program to convert given string to upperCase OR lowerCase

const toUpperCase = (string)=>{
    return string.toUpperCase();
}
const toLowerCase = (string)=>{
    return string.toLowerCase();
}


console.log(toLowerCase("ANANT  MISHRA"));
console.log(toUpperCase("anant mishra"));


console.log("")
//Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const toCamel = (string)=>{
    let str1 = string.split(' ');
    let ans=str1[0];
    for(let i=1; i<str1.length; i++){
ans += str1[i][0].toUpperCase()+str1[i].substring(1);

    }
    console.log(ans);
}
toCamel("hello john doe")




console.log("")
// 6. Write a program to find sum of an array

const findSum = (arr) => {
    return arr.reduce((acc,curr)=>{
        acc = acc+curr;
        return acc;
    },0);
    }
    let arr = [1,2,3,4,4,5,6];
    console.log(findSum(arr));



    console.log("")

    // 7. Write a program to find index of duplicate elements in an array

const findIndexofDuplicates = (arr)=>{
    
    const obj ={}
for (i in arr) {
    if(obj[arr[i]]!= undefined){
        obj[arr[i]].push(i);
    }
else{
    obj[arr[i]]=[i];
}
}
console.log(obj)

for(key in obj){
    if(obj[key].length==1){
        delete obj[key]
    }
}
return obj
}

const arr1 = [1,2,3,21,2,2,2,3,1,2,3,2,1,3,3,4,5,21,6,6,333333]
const ans = findIndexofDuplicates(arr1);
console.log(ans);


console.log("")
// Write a program to remove dupliacte elements from an array

const removeDuplicatesele = (arr) => {
    const newArr = [... new Set (arr)];
    console.log(newArr);
    }
    
    let arr2 = [1,21,2,1,21,21,2,3,4,2,4,2,12,4]
    removeDuplicatesele(arr2);

    console.log("")
    // . Write a program to find the last duplicate index in an array

const lastduplicates=(arr)=>{
    const obj={};
    for(let i=0;i<arr.length;i++)
    {
        
        let x=arr.lastIndexOf(arr[i])
        
        if(x!=i && obj[arr[i]]==undefined)
        {
            
            obj[arr[i]]=arr.lastIndexOf(arr[i])
        }
    }
    
    return obj;
}
let arr3 = [1,2,3,2,4,1,2,3,4,5]
console.log(lastduplicates(arr3))



console.log("")

// Write a program to concatenate an input of array of arrays

const array1 = [1,3,2,1,2];
const array2= [2,32,21,32,34,54];
const array3 = array1.concat(array2);
console.log(array3);

console.log("")

// Write a program to sort an array 

const sort = (arr)=>{
    arr.sort((a,b)=>a-b);
    return arr;
}

let array = [21,2,2,13,43,43,2,5,4,211,345,43,664,3,34,56];

console.log(sort(array));



console.log("")
// Write a program to display intersection of two array

const intersectionOfArrays = (arr1,arr2)=>{
    const ans = arr1.filter(i=>arr2.indexOf(i) !== -1)
    return ans;
}

const arr11 = [2,3,4,5,6,7,8,9];
const arr22 = [5,6,7,8,21,12,31];

console.log(intersectionOfArrays(arr11,arr22));


console.log("")

//  Write a program to return inverse of an array

const newarr = [3, 4, 2, 0, 1];
const inverseArr = new Array(newarr.length);

const makeInverseArray = (arr) => {
  for (i in arr) {
    inverseArr[arr[i]] = i;
  }
};

const checkInverse = (arr, inverseArr) => {
  for (i in arr) {
    if (arr[i] != inverseArr[i]) {
      console.log("The array inverse is not possible");
      return false;
    }
  }
  return true;
};

makeInverseArray(newarr);
console.log(inverseArr);



console.log("")
//Write a program to reverse an array

const reverseArr = (arr) => {
    arr.reverse(); 
    console.log(arr);
}


const array5 = [2,3,4,5,6,7,8];
reverseArr(array5);


console.log("")