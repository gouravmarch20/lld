const CoffeeBuilder = require("./builder/CoffeeBuilder");
const CoffeeDirector = require("./director/CoffeeDirector");

const director = new CoffeeDirector();

// Latte
const latte = director.makeLatte(new CoffeeBuilder());
console.log(latte.describe());

// Cappuccino
const cappuccino = director.makeCappuccino(new CoffeeBuilder());
console.log(cappuccino.describe());

// Custom coffee (no director)
const customCoffee = new CoffeeBuilder()
  .setType("Custom Coffee")
  .addMilk()
  .addSugar(3)
  .addFoam()
  .build();

console.log(customCoffee.describe());
