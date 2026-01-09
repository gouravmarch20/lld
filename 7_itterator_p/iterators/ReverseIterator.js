import { BaseIterator } from "./BaseIterator.js";

export class ReverseIterator extends BaseIterator {
  constructor(data) {
    super(data);
    this.index = data.length - 1;
  }

  hasNext() {
    return this.index >= 0;
  }

  next() {
    if (!this.hasNext()) return { done: true };
    return { value: this.data[this.index--], done: false };
  }

  reset() {
    this.index = this.data.length - 1;
  }
}
