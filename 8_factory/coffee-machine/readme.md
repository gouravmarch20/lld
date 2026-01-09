coffee-machine/
│
├── factory/
│   ├── CoffeeFactory.js
│   ├── coffees/
│   │   ├── Latte.js
│   │   ├── Cappuccino.js
│   │   └── Coffee.js
│   └── index.js
│
├── abstract-factory/
│   ├── factories/
│   │   ├── ItalianCoffeeFactory.js
│   │   ├── AmericanCoffeeFactory.js
│   │   └── CoffeeFactory.js
│   │
│   ├── products/
│   │   ├── latte/
│   │   │   ├── ItalianLatte.js
│   │   │   ├── AmericanLatte.js
│   │   │   └── Latte.js
│   │   │
│   │   ├── cappuccino/
│   │   │   ├── ItalianCappuccino.js
│   │   │   ├── AmericanCappuccino.js
│   │   │   └── Cappuccino.js
│   │
│   └── index.js
│
└── app.js


Client → CoffeeFactory → Latte / Cappuccino
Client → ItalianFactory → (ItalianLatte + ItalianCappuccino)
Client → AmericanFactory → (AmericanLatte + AmericanCappuccino)