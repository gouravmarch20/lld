// main.js
import { Vehicle } from "./classes/Vehicle.js";
import { Car } from "./classes/Car.js";
import { ElectricCar } from "./classes/ElectricCar.js";

// Create base prototype
const bike = new Vehicle("bike", 2);
bike.describe();

// Clone it using the Prototype Pattern
const bikeClone = bike.clone();
bikeClone.describe();
console.log("Are bike and clone same instance?", bike === bikeClone); // false

// Create car instance
const bmw = new Car("BMW", "M5", 4);
bmw.describe();

// Clone car
const bmwClone = bmw.clone();
bmwClone.model = "M4";
bmwClone.describe();
console.log("Are BMW and clone same instance?", bmw === bmwClone); // false

// Create electric car instance
const tesla = new ElectricCar("Tesla", "Model S", "100kWh", 600);
tesla.describe();

// Clone electric car
const teslaClone = tesla.clone();
teslaClone.model = "Model X";
teslaClone.range = 580;
teslaClone.describe();
console.log("Are Tesla and clone same instance?", tesla === teslaClone); // false
