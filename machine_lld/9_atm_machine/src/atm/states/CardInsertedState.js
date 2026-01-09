/**
 * CARD INSERTED STATE
 * -------------------
 * Validates card + PIN
 */

const ATMState = require("../ATMState");
const CardManagerFactory = require("../../services/CardManagerFactory");
const AmountEnteredState = require("./AmountEnteredState");
const EjectCardState = require("./EjectCardState");

class CardInsertedState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  insertCard(card, pin) {
    const manager = CardManagerFactory.get(card.type);

    if (!manager.validateCard(card, pin)) {
      this.atm.changeState(new EjectCardState(this.atm));
      return false;
    }

    this.atm.card = card;
    this.atm.changeState(new AmountEnteredState(this.atm));
    return true;
  }
}

module.exports = CardInsertedState;
