export class Segment {
    constructor({ from, to, departAt, arriveAt, carrier }) {
      this.from = from;
      this.to = to;
      this.departAt = new Date(departAt);
      this.arriveAt = new Date(arriveAt);
      this.carrier = carrier || null;
      Object.freeze(this);
    }
  
    validate() {
      const errors = [];
      const code = /^[A-Z]{3}$/;
  
      if (!code.test(this.from)) errors.push(`from must be a 3-letter IATA code: '${this.from}' given`);
      if (!code.test(this.to)) errors.push(`to must be a 3-letter IATA code: '${this.to}' given`);
      if (this.departAt > this.arriveAt)
        errors.push(`departAt ${this.departAt.toISOString()} is after arriveAt ${this.arriveAt.toISOString()}`);
      return errors;
    }
  
    toJSON() {
      return {
        from: this.from,
        to: this.to,
        departAt: this.departAt.toISOString(),
        arriveAt: this.arriveAt.toISOString(),
        carrier: this.carrier,
      };
    }
  }
  