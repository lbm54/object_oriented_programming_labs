let container = document.getElementById("container");
let sidePanel = document.getElementById("sidePanel");
let liName = document.getElementById("name");
let liWidth = document.getElementById("width");
let liHeight = document.getElementById("height");
let liRadius = document.getElementById("radius");
let liArea = document.getElementById("area");
let liPerimeter = document.getElementById("perimeter");

class Shape {
  constructor(name, width, height, radius) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.radius = radius;

    this.shapeDiv = document.createElement("div");
    this.shapeDiv.classList.add("shape");

    let xPos = `${Math.floor(Math.random() * (600 - width) + width)}px`;
    let yPos = `${Math.floor(Math.random() * (600 - height) + height)}px`;
    this.shapeDiv.style.top = yPos;
    this.shapeDiv.style.left = xPos;
    this.shapeDiv.style.height = this.height + "px";
    this.shapeDiv.style.width = this.width + "px";

    this.shapeDiv.addEventListener("click", () => {
      this.describe();
    });
    this.shapeDiv.addEventListener("dblclick", () => {
        console.log('I was called!');
        container.removeChild(this.shapeDiv);
    });

    container.appendChild(this.shapeDiv);
  }

  describe() {
    liName.innerHTML = "Shape Name: " + this.name;
    liWidth.innerHTML = "Width: " + this.width;
    liHeight.innerHTML = "Height: " + this.height;
    liRadius.innerHTML = "Radius: " + this.radius;
    liArea.innerHTML = "Area: " + this.area;
    liPerimeter.innerHTML = "Perimeter: " + this.perimeter;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name, width, height, null);
    this.perimeter = height * 2 + width * 2;
    this.area = width * height;
    this.shapeDiv.style.backgroundColor = 'green';
  }
}

class Square extends Rectangle {
  constructor(side) {
    super("square", side, side);
    this.shapeDiv.style.backgroundColor = 'red';
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle", radius * 2, radius * 2, radius);
    this.area = Math.PI * radius * radius;
    this.perimeter = Math.PI * radius * 2;
    this.shapeDiv.style.borderRadius = `${radius}px`;
    this.shapeDiv.style.backgroundColor = 'purple';
  }
}

class Triangle extends Shape {
  constructor(height) {
    super("triangle", height, height, null);
    this.perimeter = 2 * height + Math.sqrt(2) * height;
    this.area = height * height * 0.5;
    this.shapeDiv.style.backgroundColor = 'yellow';
  }
}

document
  .getElementById("rectangleButton")
  .addEventListener("click", function() {
    let width = document.getElementById("rectangleWidthInput").value;
    let height = document.getElementById("rectangleHeightInput").value;
    new Rectangle("rectangle", width, height);
  });

document.getElementById("circleButton").addEventListener("click", function() {
  let radius = document.getElementById("circleInput").value;
  new Circle(radius);
});

document.getElementById("squareButton").addEventListener("click", function() {
  let side = document.getElementById("squareInput").value;
  new Square(side);
});

document.getElementById("triangleButton").addEventListener("click", function() {
  let height = document.getElementById("triangleInput").value;
  new Triangle(height);
});
