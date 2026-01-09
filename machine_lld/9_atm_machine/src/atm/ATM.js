/**
 * CONTEXT CLASS (State Pattern)
 * -----------------------------
 * Delegates behavior to current state.
 */

const ReadyState = require("./states/ReadyState");
const BackendAPI = require("../services/BackendAPI");

class ATM {
  constructor(atmId) {
    this.atmId = atmId;
    this.state = new ReadyState(this);
    this.card = null;
    this.transaction = null;

    BackendAPI.updateATMState(atmId, "READY");
  }

  changeState(state) {
    this.state = state;
    BackendAPI.updateATMState(this.atmId, state.constructor.name);
  }

  initTransaction() {
    return this.state.initTransaction();
  }
  insertCard(card, pin) {
    return this.state.insertCard(card, pin);
  }
  enterAmount(amount) {
    return this.state.enterAmount(amount);
  }
  dispenseCash() {
    return this.state.dispenseCash();
  }
  ejectCard() {
    return this.state.ejectCard();
  }
}

module.exports = ATM;
