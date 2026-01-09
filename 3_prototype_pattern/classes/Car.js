import { Vehicle } from "./Vehicle.js";

export class Car extends Vehicle {
  constructor(brand, model, doors = 4) {
    super("car", 4);
    this.brand = brand;
    this.model = model;
    this.doors = doors;
  }

  describe() {
    console.log(
      `This is a ${this.brand} ${this.model} (${this.type}) with ${this.doors} doors and ${this.wheels} wheels.`
    );
  }
}
