// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");
class Queue {
  stack = new Stack();
  reverse(initialStack) {
    const stackReversed = new Stack();
    while (initialStack.peek()) {
      stackReversed.push(initialStack.pop());
    }
    return stackReversed;
  }
  add(record) {
    this.stack.push(record);
  }
  remove() {
    this.stack = this.reverse(this.stack);
    const record = this.stack.pop();
    this.stack = this.reverse(this.stack);
    return record;
  }
  peek() {
    this.stack = this.reverse(this.stack);
    const record = this.stack.peek();
    this.stack = this.reverse(this.stack);
    return record;
  }
}

module.exports = Queue;
