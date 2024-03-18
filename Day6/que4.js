// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.


class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    fullName() {
        console.log(`Full Name of Person is ${this.firstName}  ${this.lastName}`)
    }
   static avgAge(...object){
   
        let ans =0;

        for ( let i= 0;i<object.length;i++ ){
     ans = ans+object[i].age;

        }
        return Math.round(ans/object.length);
    }

}

const per1 = new Person("Anant","Mishra",21);
per1.fullName();

const per2 = new Person("Anant","Mishra",24);
const per3 = new Person("Anant","Mishra",26);
const per4 = new Person("Anawnt","Mishra",20);
const per5 = new Person("Anant","Mishra",30);

console.log("Avg age is : " + Person.avgAge(per1,per2,per3,per4,per5))