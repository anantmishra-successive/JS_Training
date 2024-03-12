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
let arr = [1,2,3,2,4,1,2,3,4,5]
console.log(lastduplicates(arr))