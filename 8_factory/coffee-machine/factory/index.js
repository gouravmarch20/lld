const CoffeeFactory = require("./CoffeeFactory");

const coffee = CoffeeFactory.create("latte");
console.log(coffee.prepare());
