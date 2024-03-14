// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.getDetails = function () {
//   console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);

// delete person.name;
// person.getDetails();

// delete the var from memory space after using

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};
var person = new Person("John Doe", 30);
person.getDetails();
delete person.name;
