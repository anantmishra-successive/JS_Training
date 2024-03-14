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