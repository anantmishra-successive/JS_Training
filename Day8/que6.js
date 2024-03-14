// var person = {
//   name: "John Doe",
//   age: 30,
//   getDetails: function () {
//     console.log(this.name + " is " + this.age + " years old");
//   },
// };
// var getPersonDetails = person.getDetails;
// getPersonDetails();






// we have to access object method outside the object and we dont want to invoke it directy wo we bind the method with object and make a copy and use it later when we needed

var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person.getDetails.bind(person);
getPersonDetails();
