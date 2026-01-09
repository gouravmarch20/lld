import { Violation } from "../Violation.js";

export class WeekendRule {
  check(expense) {
    const day = expense.date.getDay(); // 0 = Sunday, 6 = Saturday
    const isWeekend = day === 0 || day === 6;
    if (isWeekend) {
      return new Violation(
        `Expense ${expense.expenseId} can not submit in weekend $${day} `
      );
    }

    return null;
  }
}
