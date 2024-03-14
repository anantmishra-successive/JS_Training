// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)




const func= async (print)=>{
    setTimeout(async ()=>{
        const res = await fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
       headers: {
        "X-RapidAPI-Key": "5f4516e06cmshfd4c3e5f19ad444p1ce5fbjsna35db917957a",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
        });
        const data = await res.json();
        print(data);

    },1000)
    
}

func((data)=>{
    console.log(data);
})

console.log(" ")

// 2. Give an example of using multiple callback functions in a single function in JavaScript

function squareNumbers(number) {
    console.log(`Squared number = ${number * number}`)
  }
  
  function addNumbers(number1, number2) {
    return number1 + number2
  }
  
  function useCallbackForNumbers(callbackAdd, callbackSquare) {
    const sumOfNumbers = callbackAdd(arguments[2], arguments[3])
    callbackSquare(sumOfNumbers)
  }
  
  useCallbackForNumbers(addNumbers, squareNumbers, 2, 3)

  console.log(" ")

  // 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched succesfully By promises");
    }, 1000);
  });
  
  myPromise
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  
    console.log(" ")

    // 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

const rateLimiter = (i) =>
new Promise((resolve,reject) => {
   if(i<10) resolve(`Promise run for ${i}th request`)
   else
    reject(`Too many concurrent request`)
})

for(let i=1;i<11;i++){
rateLimiter(i).then((res) => console.log(res)).catch(err=> console.log(err))
}


console.log(" ")
// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

const taskQueue = (i,limit) =>
  new Promise((resolve, reject) => {
    setTimeout(() =>{
    if (i <= limit) {
        
      resolve(`promise ran for ${i} requests`);
    }
     else {
      reject("too many concurrent requests");
    }
},i*1000)}
);
    
  
const limit=10;
for (let i = 1; i < limit+2; i++) {
    taskQueue(i,limit)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
console.log(" ")
// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

const myPromise1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Hello from the Promise");
    },1000)
})

const getData = async () =>{
    const promiseData = await myPromise1;
    console.log(promiseData)
}
getData();

console.log(" ")
// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const p1= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Data fetched successfully from first promise")
    },1000)
})

const p2= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Data fetched successfully from second promise")
    },2000)
}
)

const p3= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Data fetched successfully from third promise")
    },3000)
}
)

const apicalling = async()=>{
    const [a,b,c] =await Promise.all([p1, p2, p3]);

    console.log(a);
    console.log(b);
    console.log(c);
}

apicalling()

console.log(" ")
// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function fetchData(urls){
    try{
        const res = await Promise.all(urls.map(url => fetch(url)));

        const data = await Promise.all(res.map(val => val.json()));

        const combinedData = data.reduce((acc,curr)=>{
            return {...acc,...curr}
        },{});
        return combinedData;
    } 
    catch(err) {
console.log(err);
    }
}

const apiUrls = ['https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/posts/5',]

fetchData(apiUrls).then(res=>console.log(res)).catch(err=>console.log(err))
