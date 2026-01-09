import { Violation } from "../Violation.js";

export class DisallowRule {
  check(expense) {
    return new Violation(
      `Expense ${expense.expenseId} type '${expense.expenseType}' is disallowed`
    );
  }
}
