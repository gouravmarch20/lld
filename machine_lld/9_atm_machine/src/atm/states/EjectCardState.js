/**
 * EJECT CARD STATE
 * ----------------
 * Resets ATM
 */

const ATMState = require("../ATMState");
const ReadyState = require("./ReadyState");

class EjectCardState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  ejectCard() {
    console.log("💳 Card ejected");
    this.atm.card = null;
    this.atm.transaction = null;
    this.atm.changeState(new ReadyState(this.atm));
  }
}

module.exports = EjectCardState;
