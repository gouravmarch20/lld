export class ExpenseUtils {
  static areAllExpensesOfSameTrip(expenses) {
    if (expenses.length === 0) return true;
    const tripId = expenses[0].tripId;
    return expenses.every((e) => e.tripId === tripId);
  }
}
