
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