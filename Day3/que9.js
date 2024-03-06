// Write a program to print fibonaaci series
let x = 0;
let y = 1;
let z;
const printFibonaaci = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(x);
    z = x + y;
    x = y;
    y = z;
  }
};

printFibonaaci(10);
