export class BaseIterator {
  constructor(data) {
    this.data = data;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.data.length;
  }

  next() {
    if (!this.hasNext()) return { done: true };
    return { value: this.data[this.index++], done: false };
  }

  reset() {
    this.index = 0;
  }
}
