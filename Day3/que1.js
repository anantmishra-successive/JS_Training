// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)


const calculator = (a,b,op)=>{
    if(op==="+"){
        return a+b;
    }
    else if(op==="-"){
        return a-b;
    }
    else if(op==="*"){  
        return a*b;
    }
    else if(op==="/"){
        return a/b; 

    }
    else
    console.log("enter valid operator");


}

console.log(calculator(3,4,'+'))
console.log(calculator(3,4,'-'))
console.log(calculator(3,4,'*'))
console.log(calculator(3,4,'/'))