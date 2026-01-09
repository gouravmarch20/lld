// classes/ElectricCar.js
import { Car } from "./Car.js";

export class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity, range) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity;
    this.range = range;
  }

  describe() {
    console.log(
      `This is an electric ${this.brand} ${this.model} with a ${this.batteryCapacity} battery and ${this.range}km range.`
    );
  }
}
