// Write a program to display prime numbers from 1 to 50

const checkPrime = (num)=>{
    let x = Math.sqrt(num)
    for(let i=2;i<=x;i++){
        if(num%i===0) return false;
        
    }
    return true;
}

let arr=[];

const printPrime = (num) =>{
    for(let i=2;i<num;i++){
if(checkPrime(i)) arr.push(i)
    }
console.log(arr)
}
printPrime(50);