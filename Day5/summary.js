// 1. Write a program to iterate over object.

const obj = {
    x:5,
    y:3,
    z:1,
}

const objIterate = (object) =>{
    for(let key in object) {
    
        value = object[key];
        console.log(key ,":" ,value);
    
}
}

objIterate(obj)

console.log("");
// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const arr = [
    { name: "Anant", age: 26 },
    { name: "Shashwat", age: 14 },
    { name: "ayush", age: 50 },
    { name: "Udit", age: 30 },
  ];
  
  const sort = (obj) => {
    return obj.sort((a, b) => a.age - b.age);
  };
  
  console.log(sort(arr));
  console.log("");

  // 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const arr1 = [
    { name: "Anant", age: 26,id:1 },
    { name: "Shashwat", age: 14,id:2 },
    { name: "ayush", age: 50 ,id:3},
    { name: "Udit", age: 30,id:4 },
  ];


  const delId = (obj)=>{
    for(let i in obj){
        delete obj[i].id
    }
    console.log(obj)
  }

  delId(arr1);


  console.log("");
//4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.



const obj1={
    a:1,
    b:2,
    c:3,
    d:4,
}

const deepClone = (obj)=>{
    return JSON.parse(JSON.stringify(obj))
}   


console.log(deepClone(obj1))

console.log("");
// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.


const obj2 = {
    a: 1,
    b: { c: 2, d: [3, 4] },
  };
  const flattenedObj = {};
  
  const flatten = (obj, prefix = '') => {
  
      for (key in obj){
          if (typeof obj[key] === 'object'){
              flatten(obj[key], prefix + '.' + key);
          }else{
              let prefixKey = prefix + '.' + key; 
              flattenedObj[prefixKey] = obj[key];
          }
      }
      return flattenedObj;
  }
  
  console.log(flatten(obj2));

  console.log("");