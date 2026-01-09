const Latte = require("./coffees/Latte");
const Cappuccino = require("./coffees/Cappuccino");

class CoffeeFactory {
  static create(type) {
    switch (type) {
      case "latte":
        return new Latte();
      case "cappuccino":
        return new Cappuccino();
      default:
        throw new Error("Unknown coffee type");
    }
  }
}

module.exports = CoffeeFactory;
