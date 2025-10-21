import { Violation } from "../Violation.js";

export class BlackListVendorRule {
  constructor(blacklist) {
    console.log("blacklist", blacklist);

    this.blacklist = blacklist || [];
  }
  check(expense) {
    if (this.blacklist.includes(expense.vendorName)) {
      return new Violation(
        `Expense ${expense.expenseId} uses blacklisted vendor ${expense.vendorName}`
      );
    }
    return null; // no violation
  }
}
