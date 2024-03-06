// 1. Write a program to remove duplicate charecters from a string 

const removeDuplicates = (string)=>{
    let str1 = string.split("");
   let str2 = [... new Set(str1)]
   console.log(str2.join(""))
   
}
removeDuplicates("Hello Yellow")