import { Expense } from "./src/model/Expense.js";
import { ExpenseType } from "./src/type/ExpenseType.js";
import { RuleManagerRunner } from "./src/rule/RuleManagerRunner.js";
import { RuleEngine } from "./src/rule/RuleEngine.js";

const expenses = [
  new Expense(
    "1",
    "trip1",
    10,
    ExpenseType.RESTAURANT,
    "2025-10-18",
    "Chipotle"
  ), // Saturday
  new Expense("2", "trip1", 50, ExpenseType.RESTAURANT, "2025-10-20", "Subway"), // Monday
  new Expense(
    "3",
    "trip1",
    100,
    ExpenseType.RESTAURANT,
    "2025-10-17",
    "Outback"
  ), // Friday
  new Expense("4", "trip1", 1200, ExpenseType.AIRFARE, "2025-10-17", "Delta"), // disallowed
  new Expense(
    "5",
    "trip1",
    200,
    ExpenseType.ENTERTAINMENT,
    "2025-10-18",
    "AMC"
  ), // weekend
  new Expense("6", "trip1", 50, ExpenseType.HOTEL, "2025-10-18", "FakeShop"), // blacklisted
  new Expense("7", "trip1", 43, ExpenseType.ENTERTAINMENT, "2025-10-18", "AMC"),
];
const runner = new RuleManagerRunner(new RuleEngine());
runner.run(expenses);
