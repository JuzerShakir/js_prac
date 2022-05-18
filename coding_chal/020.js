class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }

  get speedUS() {
    return `The current speed of ${this.make} is at ${this.speed / 1.6}mi/h.`;
  }

  set speedUS(value) {
    this.speed = value * 1.6;
  }
}

const ford = new Car("Ford", 120);
ford.accelerate();
console.log(ford.speedUS);
console.log(ford.speed);
ford.speedUS = 100;
console.log(ford.speed);
ford.brake();
