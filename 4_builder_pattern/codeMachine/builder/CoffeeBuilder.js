const Coffee = require("../product/Coffee");

class CoffeeBuilder {
  constructor() {
    this.coffee = new Coffee();
  }

  setType(type) {
    this.coffee.type = type;
    return this; // chaining
  }

  addMilk() {
    this.coffee.milk = true;
    return this;
  }

  addSugar(spoons = 1) {
    this.coffee.sugar = spoons;
    return this;
  }

  addFoam() {
    this.coffee.foam = true;
    return this;
  }

  build() {
    return this.coffee;
  }
}

module.exports = CoffeeBuilder;
