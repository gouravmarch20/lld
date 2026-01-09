const Latte = require("./Latte");

class ItalianLatte extends Latte {
  prepare() {
    return "Italian Latte with rich milk 🇮🇹";
  }
}

module.exports = ItalianLatte;
