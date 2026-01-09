const Cappuccino = require("./Cappuccino");

class AmericanCappuccino extends Cappuccino {
  prepare() {
    return "American Cappuccino with light foam 🇺🇸";
  }
}

module.exports = AmericanCappuccino;
