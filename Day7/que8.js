// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function fetchData(urls){
    try{
        const res = await Promise.all(urls.map(url => fetch(url)));

        const data = res.map(response => response.json())
         const jsonData = await Promise.all(data)
    
        return jsonData;
    } 
    catch(err) {
console.log(err);
    }
}

const apiUrls = [
'https://jsonplaceholder.typicode.com/posts/5','https://jsonplaceholder.typicode.com/posts/7']

fetchData(apiUrls).then(res=>console.log(res)).catch(err=>console.log(err))