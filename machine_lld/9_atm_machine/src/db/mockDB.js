/**
 * STATIC IN-MEMORY DATABASE
 * ------------------------
 * Design Pattern:
 * - Repository (simplified)
 * - Used to simulate real DB / API
 */

module.exports = {
  atms: {
    ATM_1: {
      balance: 100000,
      state: "READY"
    }
  },

  cards: {
    "9999888877776666": {
      pin: "1234",
      type: "DEBIT",
      balance: 50000,
      blocked: false
    }
  },

  transactions: {}
};
