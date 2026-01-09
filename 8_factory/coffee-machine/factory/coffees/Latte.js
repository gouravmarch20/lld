const Coffee = require("./Coffee");

class Latte extends Coffee {
  prepare() {
    return "Latte prepared with milk ☕🥛";
  }
}

module.exports = Latte;
