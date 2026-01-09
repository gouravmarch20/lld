import { dataset } from "./data/dataset.js";
import { SequentialIterator } from "./iterators/SequentialIterator.js";
import { ReverseIterator } from "./iterators/ReverseIterator.js";
import { RandomIterator } from "./iterators/RandomIterator.js";
import { JumpIterator } from "./iterators/JumpIterator.js";
import { PagedIterator } from "./iterators/PagedIterator.js";

console.log("=== Sequential ===");
let seq = new SequentialIterator(dataset);
while (seq.hasNext()) console.log(seq.next().value);

console.log("\n=== Reverse ===");
let rev = new ReverseIterator(dataset);
while (rev.hasNext()) console.log(rev.next().value);

console.log("\n=== Random ===");
let rand = new RandomIterator(dataset);
while (rand.hasNext()) console.log(rand.next().value);

console.log("\n=== Jump (step=3) ===");
let jump = new JumpIterator(dataset, 3);
while (jump.hasNext()) console.log(jump.next().value);

console.log("\n=== Pagination (limit=4) ===");
let page = new PagedIterator(dataset, 4);
while (page.hasNextPage()) console.log("Page:", page.getPage());
