import { BaseIterator } from "./BaseIterator.js";

export class RandomIterator extends BaseIterator {
  constructor(data) {
    super(data);
    this.visited = new Set();
  }

  hasNext() {
    return this.visited.size < this.data.length;
  }

  next() {
    if (!this.hasNext()) return { done: true };

    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * this.data.length);
    } while (this.visited.has(randIndex));

    this.visited.add(randIndex);
    return { value: this.data[randIndex], done: false };
  }

  reset() {
    this.visited.clear();
  }
}
