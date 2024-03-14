// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var person = Person("John Doe", 30);
// console.log(person.name);

// make a class and make a instance of class than we can access it

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;;
        
    }
   
  }
  var person = new Person("John Doe", 30);
  console.log(person.name);
  

  // or

  function Person3(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person3("John Doe", 30);
console.log(person.name);