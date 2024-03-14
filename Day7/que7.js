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
// const arr = [p1,p2,p3]
const apicalling = async()=>{
    const [a,b,c] =await Promise.all([p1,p2,p3]);

    console.log(a);
    console.log(b);
    console.log(c);
}

apicalling()