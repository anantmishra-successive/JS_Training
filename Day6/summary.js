
// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
    constructor(balance,owner){
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        console.log("Depositing")
        this.balance += amount;
        console.log("Balance: " + this.balance)

    }

    withDraw(amount){
        console.log("withdraw")
        this.balance -= amount;
        console.log("Balance: " + this.balance)
    }


    displayBalance(){
        console.log( "Balance: "+ this.balance)
    }
}

const myAcc = new BankAccount(2500,"Anant") ;
myAcc.deposit(200) ;
myAcc.withDraw(20);
myAcc.displayBalance();
console.log("Owner : " + myAcc.owner);

console.log("")
// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
    constructor(width, height) {
        this.width = width; 
        this.height = height;
    }

    getArea() { 
        return this.width * this.height; 
    }
}

class Rectangle extends Shape {


    constructor(width, height) {
      super(width, height);
    }

    getArea() {
        return this.height * this.width;
    }
}
class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea() { 
        return (0.5*this.width*this.height)
     }
}

const triangle = new Triangle(20,10);
console.log( " area of triangle is :"+ triangle.getArea() );

const rectangle = new Rectangle(20,10);
console.log( " area of rectangle  is :"+ rectangle.getArea() );



console.log("")

// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
  
// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.




//3.1

class Person {
    constructor (name,age,gender,interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    greetings(){
        console.log(`Hi ${this.name }, welcome to Successive Digital ! you are ${this.age} years old with a ${this.gender} personality and you have ${this.interests} skillls`)
    }
    

     farewell(){
        console.log(`Hi ${this.name } thanks for your services !!`);
     }

}


const p1 = new Person("Adityaa",65,"Male","Coding")
p1.greetings();
p1.farewell()


class Student extends Person {
    constructor(name,age,gender,interests,studies){
        super(name,age,gender,interests)
        this.studies =studies
        }
    
    greetings(){
        console.log(`Hi ${this.name } welcome to Successive Digital ! you are ${this.age} years old with a ${this.gender} personality and you have ${this.interests} skillls and you are studying ${this.studies}`);
    }
}


const s1 = new Student("Aditya",23,"male","Coding","React");
s1.greetings()


class Teacher extends Person {
    constructor(name, age, gender, interests,subjectsTaught) {
super(name, age, gender, interests)
this.subjectsTaught = subjectsTaught
    }

    farewell(){
        console.log(`Hi ${this.name } thanks for your services !! He is  teaching ${this.subjectsTaught}`)
    }
}

const t1 = new Teacher("Krishna",25,"male","coding","Javascript")
t1.farewell()

console.log("")

// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.


class Person2 {
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

const per1 = new Person2("Anant","Mishra",21);
per1.fullName();

const per2 = new Person2("Anant","Mishra",24);
const per3 = new Person2("Anant","Mishra",26);
const per4 = new Person2("Anawnt","Mishra",20);
const per5 = new Person2("Anant","Mishra",30);

console.log("Avg age is : " + Person2.avgAge(per1,per2,per3,per4,per5))