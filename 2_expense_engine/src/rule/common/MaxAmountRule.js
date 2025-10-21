import {Violation} from "../Violation.js";
export class MaxAmountRule {
  constructor(maxAmount) {
    this.maxAmount = maxAmount;
  }

  check(expense) {
    if (expense.amountUsd > this.maxAmount) {
      return new Violation(
        `Expense ${expense.expenseId} exceeds $${this.maxAmount} limit`
      );
    }
    return null;
  }
}
