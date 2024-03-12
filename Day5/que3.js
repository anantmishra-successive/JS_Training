// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const arr = [
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

  delId(arr);