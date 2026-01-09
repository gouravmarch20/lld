class CoffeeDirector {
  makeLatte(builder) {
    return builder.setType("Latte").addMilk().addSugar(2).build();
  }

  makeCappuccino(builder) {
    return builder.setType("Cappuccino").addMilk().addFoam().build();
  }

  makeBlackCoffee(builder) {
    return builder.setType("Black Coffee").build();
  }
}

module.exports = CoffeeDirector;
