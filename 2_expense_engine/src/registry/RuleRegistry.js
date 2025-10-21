import { MaxAmountRule } from "../rule/common/MaxAmountRule.js";
import { DisallowRule } from "../rule/common/DisallowRule.js";
import { ExpenseType } from "../type/ExpenseType.js";
import { WeekendRule } from "../rule/common/WeekendRule.js";
import { BlackListVendorRule } from "../rule/common/BlackListVendorRule.js";
import {
  ENTERTAINMENT_BLACKLISTED_VENDORS,
  HOTEL_BLACKLISTED_VENDORS,
} from "../type/BlackListVendorType.js";

export class RuleRegistry {
  static getExpenseRulesRegistry() {
    return {
      [ExpenseType.RESTAURANT]: [new MaxAmountRule(75), new WeekendRule()],
      [ExpenseType.AIRFARE]: [new DisallowRule()],
      [ExpenseType.ENTERTAINMENT]: [
        new MaxAmountRule(75),
        new BlackListVendorRule(ENTERTAINMENT_BLACKLISTED_VENDORS),
      ],
      [ExpenseType.HOTEL]: [new BlackListVendorRule(HOTEL_BLACKLISTED_VENDORS)],
    };
  }

  static getAllExpenseRulesRegistry() {
    return [new MaxAmountRule(2000)];
  }

  static getAllTripRulesRegistry() {
    return [new MaxAmountRule(1000)];
  }
}
