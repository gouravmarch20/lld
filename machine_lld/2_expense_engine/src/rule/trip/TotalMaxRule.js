import { Violation } from "../Violation.js";

class TotalMaxRule {
  constructor(maxTotal) {
    this.maxTotal = maxTotal;
  }
  check(expenses) {
    const total = expenses.reduce((sum, e) => sum + e.amountUsd, 0);
    if (total > this.maxTotal) {
      return new Violation(`Trip total ${total} exceeds $${this.maxTotal}`);
    }
    return null;
  }
}
