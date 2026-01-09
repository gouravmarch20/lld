import {RuleRegistry} from "../registry/RuleRegistry.js";
export class RuleManagerRunner {
  constructor(ruleEngine) {
    this.ruleEngine = ruleEngine;
  }
  run(expenses) {
    const expenseRulesRegistry = RuleRegistry.getExpenseRulesRegistry();
    const tripRulesRegistry = RuleRegistry.getAllTripRulesRegistry();
    const allExpenseRulesRegistry = RuleRegistry.getAllExpenseRulesRegistry();

    const violations = this.ruleEngine.evaluate(
      expenses,
      expenseRulesRegistry,
      allExpenseRulesRegistry,
      tripRulesRegistry
    );

    for (const violation of violations) {
      console.log(violation.getMessage());
    }
  }
}
