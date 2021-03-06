let person1 = {
  name: "Guy",
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}`);
  }
};

let person2 = {
  name: "Lynne",
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}`);
  }
};

let person3 = {
  name: "Megan",
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}`);
  }
};

let person4 = {
  name: "Roy",
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}`);
  }
};

let person5 = {
  name: "Rachel",
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}`);
  }
};

// function Person(name, city, age) {
//   this.name = name;
//   this.city = city;
//   this.age = age;
// }

// Person.prototype.sayHello = function() {
//   console.log(
//     `Hello! My name is ${this.name} I am ${this.age} years old and live in ${
//       this.city
//     }`
//   );
// };

class Person {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello! My name is ${this.name} I am ${this.age} years old and live in ${
        this.city
      }`
    );
  }
}

person1 = new Person("Guy", "Birmingham", 30);
person2 = new Person("Lynne", "Birmingham", 30);
person3 = new Person("Megan", "Birmingham", 30);
person4 = new Person("Roy", "Birmingham", 30);
person5 = new Person("Rachel", "Birmingham", 30);

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

class Vehicle {
  constructor(type, manufacturer, numWheels) {
    this.manufacturer = manufacturer;
    this.numWheels = numWheels;
    this.type = type;
  }

  aboutVehicle() {
    console.log(
      `I am a ${this.type}.  I was made by ${this.manufacturer} and I have ${
        this.numWheels
      } wheels`
    );
  }
}

class Truck extends Vehicle {
  constructor(type, manufacturer, numWheels, numDoors, hasBed) {
    super(type, manufacturer, numWheels);
    this.numDoors = numDoors;
    this.hasBed = hasBed;
  }

  aboutVehicle() {
    super.aboutVehicle();
    console.log(`I have ${this.numDoors} doors`);
    this.hasBed
      ? console.log("I also have a bed")
      : console.log("I don't have a bed");
  }
}

class Sedan extends Vehicle {
  constructor(type, manufacturer, numWheels, size, mpg) {
    super(type, manufacturer, numWheels);
    this.size = size;
    this.mpg = mpg;
  }

  aboutVehicle() {
    super.aboutVehicle();
    console.log(`In addition, I get ${this.mpg} mpg and I am ${this.size} sized`);
  }
}

class Motorcycle extends Vehicle {
  constructor(type, manufacturer, numWheels, hasHandlebars, noDoors) {
    super(type, manufacturer, numWheels);
    this.hasHandlebars = hasHandlebars;
    this.noDoors = noDoors;
  }

  aboutVehicle() {
    super.aboutVehicle();
    this.hasHandlebars
      ? console.log("I also have handlebars")
      : console.log("I don't have handlebars");
    this.noDoors
      ? console.log("I don't have doors")
      : console.log("I have doors");
  }
}

let vehicle = new Vehicle("Grand Cherokee", "Jeep", 4);
let truck = new Truck("F-150", "Ford", 4, 4, true);
let sedan = new Sedan("Camry", "Toyota", 4, "medium", 30);
let motorcycle = new Motorcycle("Some model", "Harley Davidson", 2, true, true);

vehicle.aboutVehicle();
truck.aboutVehicle();
sedan.aboutVehicle();
motorcycle.aboutVehicle();
