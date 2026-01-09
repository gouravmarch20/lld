const CoffeeFactory = require("./CoffeeFactory");
const AmericanLatte = require("../products/latte/AmericanLatte");
const AmericanCappuccino = require("../products/cappuccino/AmericanCappuccino");

class AmericanCoffeeFactory extends CoffeeFactory {
  createLatte() {
    return new AmericanLatte();
  }

  createCappuccino() {
    return new AmericanCappuccino();
  }
}

module.exports = AmericanCoffeeFactory;
