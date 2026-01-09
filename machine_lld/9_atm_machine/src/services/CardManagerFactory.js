/**
 * FACTORY DESIGN PATTERN
 * ---------------------
 * Creates card manager based on card type
 */

const DebitCardService = require("./DebitCardService");
const CreditCardService = require("./CreditCardService");

class CardManagerFactory {
  static get(type) {
    if (type === "DEBIT") return new DebitCardService();
    if (type === "CREDIT") return new CreditCardService();
    throw new Error("Invalid card type");
  }
}

module.exports = CardManagerFactory;
