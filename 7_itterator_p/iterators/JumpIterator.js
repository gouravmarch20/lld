import { BaseIterator } from "./BaseIterator.js";

export class JumpIterator extends BaseIterator {
  constructor(data, step = 2) {
    super(data);
    this.step = step;
  }

  next() {
    if (!this.hasNext()) return { done: true };
    const value = this.data[this.index];
    this.index += this.step;
    return { value, done: false };
  }

  reset() {
    this.index = 0;
  }
}
