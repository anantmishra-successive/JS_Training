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

const arr = [1,2,3,21,2,2,2,3,1,2,3,2,1,3,3,4,5,21,6,6,333333]
const ans = findIndexofDuplicates(arr);
console.log(ans);