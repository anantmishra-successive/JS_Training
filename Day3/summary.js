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

console.log(" ")


// Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10


let m=4;
let n=1;
for(let i=1;i<=m;i++) {
    let m = "";
    for(let j=1;j<=i;j++){
        m+= n+" ";
        n++;
    }

console.log(m);
}


console.log();

// 1
// 2 2
// 3 3 3
// 4 4 4 4

let x =4;

let y =1;
for(let i=1;i<=x;i++) {
        let x = "";
        for(let j=1;j<=i;j++){
            x+= y+" ";
            
        }
        y++;
    
    console.log(x);
    }


    console.log();


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



let a =5;
for(let i=a;i>=1;i--){
    let a ="";
    for(let j=1;j<=i;j++)
    {
        a+=j+" ";
    }
    console.log(a);
}

for(let i=2;i<=a;i++) {
    let a ="";
    for(let j=1;j<=i;j++){
        a+=j+" ";
    }
    console.log(a);
}


console.log();


// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

function printDiamond(size) {
	let pattern = "";
	for (var i = 1; i <= size; i++) {
	  for (let s = size - 1; s >= i; s--) {
		pattern += (" ");
	  }
	  for (let j = 1; j <= i; j++) {
		pattern += ("* ")
	  }
	  pattern += "\n";
	}
	if (i == size + 1) {
	  for (let i = 1; i <= size - 1; i++) {
		for (let s = 1; s <= i; s++) {
		  pattern += (" ");
		}
		for (j = i; j <= size - 1; j++) {
		  pattern += ("* ");
		}
		pattern += "\n";
	  }
	}
	console.log(pattern)
  }
printDiamond(5);

console.log(" ")


// 4. Write a program to print all even number first and then all odd numbers

const printNo = (num)=>{

    let even =""
    let odd= ""
    for(let i=0;i<num;i++){
      if(i%2===0){
        even = even+i+" ";
      } 
      else {
        odd = odd+i+" ";
      }
    }
    console.log(even);
    console.log(odd);
}

printNo(100);
console.log(" ")



// Write a program to print all even number first and then all odd numbers using only one iteration

const printNo5 = (num)=>{
    let even =""
    let odd= ""
    for(let i=0;i<num;i++){
      if(i%2===0){
        even = even+i+" ";
      } 
      else {
        odd = odd+i+" ";
      }
    }
    console.log(even);
    console.log(odd);
}

printNo5(100);
console.log(" ")


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

console.log(" ")


//Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)
const arr2=[];
const displayTwice = () =>{
    let i =2;
    while(i<4097){
        arr.push(i);
        i=i*2;

    }
    console.log(arr2);
}

displayTwice();
console.log(" ")


// 8. Write a program to dispaly number from 1-20 using all types of loops

for(let i=1;i<=20;i++){
    console.log(i);
}

console.log(" ")
let num=1;
while(num<=20){
    console.log(num++)
}
console.log(" ")



// Write a program to print fibonaaci series
let x1 = 0;
let y1 = 1;
let z;
const printFibonaaci = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(x1);
    z = x1 + y1;
    x1 = y1;
    y1 = z;
  }
};

printFibonaaci(10);
console.log(" ")
