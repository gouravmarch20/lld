/**
 * READY STATE
 * -----------
 * ATM waiting for a customer
 */

const ATMState = require("../ATMState");
const BackendAPI = require("../../services/BackendAPI");
const CardInsertedState = require("./CardInsertedState");

class ReadyState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  initTransaction() {
    const txnId = BackendAPI.createTransaction(this.atm.atmId);
    this.atm.transaction = { txnId };
    this.atm.changeState(new CardInsertedState(this.atm));
    return txnId;
  }
}

module.exports = ReadyState;
