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
