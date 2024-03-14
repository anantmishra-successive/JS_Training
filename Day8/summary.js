// Find Error in below questions and rectify them

//  let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

// Rectify Code :
// when indexing sarts from 0 we have to iterate array untill the last element which is array.length-1 or in for loop we have to use only less than sign
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}
console.log('')


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
console.log('')

let myArray1 = [1, 2, 3, 4];
for (let i = 0; i < myArray1.length; i++) {
   console.log('The value at index ' + i + ' is: ' + myArray1[i]);
}
let total = 0;
myArray.forEach(function(element) { total += element; });
console.log('The total of all elements in the array is: ' + total);

console.log("No Error Found")
console.log(" ")

let myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

let myNumber = parseInt(myString);

if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
}

console.log("no error found")


console.log(" ")

// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }

// let myNumber = myArray[5];

// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The number is undefined');
// }


// in accesing array elemnent we pass index value that is out of range so value will, be undefined.


let myArray2 = [1, 2, 3, 4];
for (let i = 0; i < myArray2.length; i++) {
   console.log(myArray2[i]);
}

let myNumber2 = myArray2[myArray2.length-1];

if (myNumber2) {
   console.log('The number is: ' + myNumber2);
} else {
   console.log('The number is undefined');
}


console.log(" ")
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

var person1 = {
    name: "John Doe",
    age: 30,
    getDetails: function () {
      console.log(this.name + " is " + this.age + " years old");
    },
  };
  var getPersonDetails = person1.getDetails.bind(person1);
  getPersonDetails();
  
  console.log(" ")
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// when we expect output from 0 to 9 so we have to use block scope so change the variable scope from global to local 

for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000); }

    console.log(" ")
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

function Person2(name, age) {
    this.name = name;
    this.age = age;
  }
  Person2.prototype.getDetails = function () {
    console.log(this.name + " is " + this.age + " years old");
  };
  var person2 = new Person2("John Doe", 30);
  person2.getDetails();
  delete person2.name;
  
  console.log(" ")
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
  
  console.log(" ")

  function getData(callback) {
    setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
 }
 getData(function(data) {
    console.log(data.length);
 });
 
 

console.log("No error found")



console.log(" ")
// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve("Data received"); }, 1000);
//  });
//  promise.then(function(data) {
//     console.log(data);
//  }, function(error) {
//     console.log(error);
//  });


// also look for catch block

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Data received");
    }, 1000);
  });
  promise.then(
    function (data) {
      console.log(data);
    }).catch(
    function (error) {
      console.log(error);
    }
  );
  
console.log(" ")
  // async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });



// wrap the set timeout in a promise so that the array is returned in a defined time frame.


 async function getData() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve ([1, 2, 3, 4, 5]);
      }, 1000);
    });
  }
  getData().then(function (data) {
    console.log(data);
  });

  console.log(" ")