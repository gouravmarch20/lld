/**
 * APPLICATION ENTRY POINT
 */

const ATM = require("./atm/ATM");
const Card = require("./models/Card");

const atm = new ATM("ATM_1");
const card = new Card("9999888877776666", "DEBIT");

atm.initTransaction();
atm.insertCard(card, "1234");
atm.enterAmount(2000);
atm.dispenseCash();
atm.ejectCard();
