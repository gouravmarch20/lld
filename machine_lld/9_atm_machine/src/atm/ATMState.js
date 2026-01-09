/**
 * STATE DESIGN PATTERN
 * --------------------
 * This is the State Interface.
 * Each ATM state implements this interface.
 */

class ATMState {
  initTransaction() {
    throw new Error("Invalid action");
  }
  insertCard() {
    throw new Error("Invalid action");
  }
  enterAmount() {
    throw new Error("Invalid action");
  }
  dispenseCash() {
    throw new Error("Invalid action");
  }
  ejectCard() {
    throw new Error("Invalid action");
  }
}

module.exports = ATMState;
