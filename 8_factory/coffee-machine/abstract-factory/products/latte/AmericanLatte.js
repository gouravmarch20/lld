const Latte = require("./Latte");

class AmericanLatte extends Latte {
  prepare() {
    return "American Latte with light milk 🇺🇸";
  }
}

module.exports = AmericanLatte;
