let container = document.getElementById("container");
let sidePanel = document.getElementById("sidePanel");
let liName = document.getElementById("name");
let liWidth = document.getElementById("width");
let liHeight = document.getElementById("height");
let liRadius = document.getElementById("radius");
let liArea = document.getElementById("area");
let liPerimeter = document.getElementById("perimeter");
let rectangleButton = document.getElementById("rectangleButton");
let circleButton = document.getElementById("circleButton");
let squareButton = document.getElementById("squareButton");
let triangleButton = document.getElementById("triangleButton");
let rectangleWidthInput = document.getElementById("rectangleWidthInput")
let rectangleHeightInput = document.getElementById("rectangleHeightInput")
let circleInput = document.getElementById("circleInput")
let squareInput = document.getElementById("squareInput")
let triangleInput = document.getElementById("triangleInput")


function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

class Shape {
  constructor(name, width, height, radius, color) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.radius = radius;

    this.shapeDiv = document.createElement("div");
    this.shapeDiv.classList.add("shape");
    this.positionMe(width, height);
    this.shapeDiv.style.backgroundColor = color;
    this.shapeDiv.addEventListener("click", () => this.describe());
    this.shapeDiv.addEventListener("dblclick", () => container.removeChild(this.shapeDiv));
    container.appendChild(this.shapeDiv);
  }

  positionMe(width, height) {
    let xPos = `${randomNumber(600, width)}px`;
    let yPos = `${randomNumber(600, height)}px`;
    this.shapeDiv.style.top = yPos;
    this.shapeDiv.style.left = xPos;
    this.shapeDiv.style.height = height + "px";
    this.shapeDiv.style.width = width + "px";
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
  constructor(width, height) {
    super("rectangle", width, height, null, "green");
    this.perimeter = height * 2 + width * 2;
    this.area = width * height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = "square";
    this.shapeDiv.style.backgroundColor = "red";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle", radius * 2, radius * 2, radius, "purple");
    this.area = Math.PI * radius * radius;
    this.perimeter = Math.PI * radius * 2;
    this.positionMe(radius);
  }

  positionMe(radius) {
    let xPos = `${randomNumber(600 - radius, radius)}px`;
    let yPos = `${randomNumber(600 - radius, radius)}px`;
    this.shapeDiv.style.top = yPos;
    this.shapeDiv.style.left = xPos;
    this.shapeDiv.style.height = radius * 2 + "px";
    this.shapeDiv.style.width = radius * 2 + "px";
    this.shapeDiv.style.borderRadius = `${radius}px`;
  }
}

class Triangle extends Shape {
  constructor(height) {
    super("triangle", height, height, null, null);
    this.perimeter = 2 * height + Math.sqrt(2) * height;
    this.area = height * height * 0.5;
    this.positionMe(height);
  }

  positionMe(height) {
    let xPos = `${randomNumber(600 - height, height)}px`;
    let yPos = `${randomNumber(600 - height, height)}px`;
    this.shapeDiv.style.top = yPos;
    this.shapeDiv.style.left = xPos;
    this.shapeDiv.style.width = 0;
    this.shapeDiv.style.height = 0;
    this.shapeDiv.style.borderLeft = `${height}px solid transparent`;
    this.shapeDiv.style.borderBottom = `${height * 2}px solid yellow`;
    this.shapeDiv.style.borderRight = `${height}px solid transparent`;
  }
}

rectangleButton.addEventListener("click", function() {
  let width = rectangleWidthInput.value;
  let height = rectangleHeightInput.value;
  new Rectangle(width, height);
});

circleButton.addEventListener("click", function() {
  let radius = circleInput.value;
  new Circle(radius);
});

squareButton.addEventListener("click", function() {
  let side = squareInput.value;
  new Square(side);
});

triangleButton.addEventListener("click", function() {
  let height = triangleInput.value;
  new Triangle(height);
});
