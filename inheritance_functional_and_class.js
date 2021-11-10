function Car(wheels) {
  this.wheels = wheels;
}


function Honda(type, wheels) {
  Car.call(this, wheels) //call Car function with this pointing to Honda Object. This makes Honda this as {wheels, type}
  this.type = type;
}

Honda.prototype = Object.create(Car.prototype); // assign Honda.protoype to Car.prototype. Use Object.create to make a copy to avoid sharing the same prototype as objects in javascript are referenced.
Honda.prototype.constructor = Honda; // assing constructor property back which was overriden on the above step
const hondaCity = new Honda("sedan", "4");

console.log(hondaCity)

/* class CarClass {
  constructor(wheels) {
    this.wheels = wheels;
  }
}

class HondaClass extends CarClass {
  
  constructor(type, wheels) {
    super(wheels);
    this.type = type;
  }

}

const hondaCity2 = new HondaClass("sedan", "4");

console.log(hondaCity2); */
