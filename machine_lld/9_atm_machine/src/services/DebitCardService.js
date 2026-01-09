/**
 * STRATEGY PATTERN
 * ----------------
 * Debit card validation logic
 */

const db = require("../db/mockDB");

class DebitCardService {
  validateCard(card, pin) {
    const stored = db.cards[card.number];
    return stored && stored.pin === pin && !stored.blocked;
  }

  validateWithdraw(amount) {
    if (amount <= 0 || amount % 100 !== 0) {
      throw new Error("Invalid withdrawal amount");
    }
  }
}

module.exports = DebitCardService;
