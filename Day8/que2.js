// let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// Rectify code 
// In loop in refers to the index so we will access tha values of properties in that manner.
let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]);
}