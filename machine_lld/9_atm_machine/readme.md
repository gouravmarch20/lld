atm-machine/
├── src/
│ ├── atm/ # ATM Core (STATE PATTERN)
│ │ ├── ATM.js # Context
│ │ ├── ATMState.js # State Interface
│ │ └── states/
│ │ ├── ReadyState.js
│ │ ├── CardInsertedState.js
│ │ ├── AmountEnteredState.js
│ │ ├── DispensingCashState.js
│ │ └── EjectCardState.js
│ │
│ ├── models/ # DOMAIN MODELS
│ │ ├── Card.js
│ │ └── Transaction.js
│ │
│ ├── services/ # STRATEGY + FACTORY
│ │ ├── BackendAPI.js # FACADE
│ │ ├── CardManagerFactory.js # FACTORY PATTERN
│ │ ├── DebitCardService.js # STRATEGY
│ │ ├── CreditCardService.js # STRATEGY
│ │ └── CashDispenserService.js
│ │
│ ├── db/
│ │ └── mockDB.js # STATIC IN-MEMORY DB
│ │
│ └── index.js # APPLICATION ENTRY
│
└── package.json
