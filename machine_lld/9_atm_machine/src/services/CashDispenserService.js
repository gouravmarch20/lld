// src/services/CashDispenserService.js
const db = require("../db/mockDB");

class CashDispenserService {
  static dispense(atmId, amount) {
    if (db.atms[atmId].balance < amount) {
      throw new Error("ATM cash insufficient");
    }
    db.atms[atmId].balance -= amount;
    console.log("💵 Cash dispensed:", amount);
  }
}

module.exports = CashDispenserService;
