export class RuleEngine {
  evaluate(
    expenses,
    expenseRulesRegistry,
    allExpenseRulesRegistry,
    tripRulesRegistry
  ) {
    const violations = [];
    // 1️⃣ Expense-level rules
    for (const expense of expenses) {
      const rules = expenseRulesRegistry[expense.expenseType] || [];

      this.checkExpenseAgainstRules(expense, rules, violations);
      this.checkExpenseAgainstRules(
        expense,
        allExpenseRulesRegistry,
        violations
      );
    }
    // 2️⃣ Trip-level rules
    for (const rule of tripRulesRegistry) {
      const violation = rule.check(expenses);
      if (violation) violations.push(violation);
    }
    return violations;
  }

  checkExpenseAgainstRules(expense, rules, violationsResult) {
    for (const rule of rules) {
      const violation = rule.check(expense);
      if (violation) violationsResult.push(violation);
    }
  }
}
