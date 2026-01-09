import { BaseIterator } from "./BaseIterator.js";

export class PagedIterator extends BaseIterator {
  constructor(data, limit = 3, offset = 0) {
    super(data);
    this.limit = limit;
    this.offset = offset;
  }

  getPage() {
    const start = this.offset;
    const end = Math.min(this.offset + this.limit, this.data.length);
    const page = this.data.slice(start, end);
    this.offset = end; // move to next page
    return page;
  }

  hasNextPage() {
    return this.offset < this.data.length;
  }

  reset() {
    this.offset = 0;
  }
}
