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
