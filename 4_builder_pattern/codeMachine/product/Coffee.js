class Coffee {
  constructor() {
    this.type = null;
    this.milk = false;
    this.sugar = 0;
    this.foam = false;
  }

  describe() {
    return `
Coffee Type : ${this.type}
Milk        : ${this.milk ? "Yes" : "No"}
Sugar       : ${this.sugar} spoon(s)
Foam        : ${this.foam ? "Yes" : "No"}
`;
  }
}

module.exports = Coffee;
