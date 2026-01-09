const CoffeeFactory = require("./CoffeeFactory");
const ItalianLatte = require("../products/latte/ItalianLatte");
const ItalianCappuccino = require("../products/cappuccino/ItalianCappuccino");

class ItalianCoffeeFactory extends CoffeeFactory {
  createLatte() {
    return new ItalianLatte();
  }

  createCappuccino() {
    return new ItalianCappuccino();
  }
}

module.exports = ItalianCoffeeFactory;
