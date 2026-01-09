/**
 * FACADE PATTERN
 * --------------
 * Hides DB operations behind simple methods
 */

const db = require("../db/mockDB");

class BackendAPI {
  static createTransaction(atmId) {
    const txnId = Date.now();
    db.transactions[txnId] = { atmId, status: "INIT" };
    return txnId;
  }

  static updateATMState(atmId, state) {
    db.atms[atmId].state = state;
  }

  static debitAccount(cardNumber, amount) {
    const card = db.cards[cardNumber];
    if (card.balance < amount) {
      throw new Error("Insufficient balance");
    }
    card.balance -= amount;
  }
}

module.exports = BackendAPI;
