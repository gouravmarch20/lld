export class Vehicle {
  constructor(type, wheels) {
    this.type = type;
    this.wheels = wheels;
  }

  describe() {
    console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
  }

  clone() {
    // Create a shallow clone that keeps prototype chain
    const clone = Object.create(Object.getPrototypeOf(this));
    return Object.assign(clone, this);
  }
}
