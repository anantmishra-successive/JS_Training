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