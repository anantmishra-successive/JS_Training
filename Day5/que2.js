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
