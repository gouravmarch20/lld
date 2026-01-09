/**
 * AMOUNT ENTERED STATE
 * --------------------
 * Validates withdrawal amount
 */

const ATMState = require("../ATMState");
const CardManagerFactory = require("../../services/CardManagerFactory");
const DispensingCashState = require("./DispensingCashState");

class AmountEnteredState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  enterAmount(amount) {
    const manager = CardManagerFactory.get(this.atm.card.type);
    manager.validateWithdraw(amount);

    this.atm.transaction.amount = amount;
    this.atm.changeState(new DispensingCashState(this.atm));
    return true;
  }
}

module.exports = AmountEnteredState;
