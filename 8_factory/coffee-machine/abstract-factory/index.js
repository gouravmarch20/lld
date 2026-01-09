const ItalianCoffeeFactory = require("./factories/ItalianCoffeeFactory");

const factory = new ItalianCoffeeFactory();

console.log(factory.createLatte().prepare());
console.log(factory.createCappuccino().prepare());
