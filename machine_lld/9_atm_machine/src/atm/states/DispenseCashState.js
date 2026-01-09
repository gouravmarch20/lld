// src/atm/states/DispenseCashState.js
const ATMState = require("../ATMState");
const BackendAPI = require("../../services/BackendAPI");
const CashDispenserService = require("../../services/CashDispenserService");
const EjectCardState = require("./EjectCardState");

class DispenseCashState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  dispenseCash() {
    BackendAPI.debitAccount(
      this.atm.card.number,
      this.atm.transaction.amount
    );

    CashDispenserService.dispense(
      this.atm.atmId,
      this.atm.transaction.amount
    );

    this.atm.changeState(new EjectCardState(this.atm));
  }
}

module.exports = DispenseCashState;
