export class Expense {
  constructor(
    expenseId,
    tripId,
    amountUsd,
    expenseType,
    date = new Date(),
    vendorName = ""
  ) {
    this.expenseId = expenseId;
    this.tripId = tripId;
    this.amountUsd = amountUsd;
    this.expenseType = expenseType;
    this.date = date instanceof Date ? date : new Date(date);
    this.vendorName = vendorName;
  }
}
