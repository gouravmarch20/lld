const Coffee = require("./Coffee");

class Cappuccino extends Coffee {
  prepare() {
    return "Cappuccino prepared with foam ☕☁️";
  }
}

module.exports = Cappuccino;
