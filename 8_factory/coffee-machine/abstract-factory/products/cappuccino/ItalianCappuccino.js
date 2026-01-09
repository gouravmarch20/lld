const Cappuccino = require("./Cappuccino");

class ItalianCappuccino extends Cappuccino {
  prepare() {
    return "Italian Cappuccino with thick foam 🇮🇹";
  }
}

module.exports = ItalianCappuccino;
