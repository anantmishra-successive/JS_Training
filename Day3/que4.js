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