class Square {
  constructor(side) {
    this.side = side;
  }
  
  get area() {
    return this.side * this.side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    if (figure instanceof Square) {
      return figure.area;
    } else if (figure instanceof Rectangle) {
      return figure.area;
    } else if (figure instanceof Circle) {
      return figure.area;
    } else {
      throw new Error('Invalid figure');
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
