class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.end = 0;
    };

    enqueue(data) {
        this.items[this.end] = data;
        this.end++;
    };

    dequeue() {
        if (this.front === this.end) {
            return null
        };

        const data = this.items[this.front];
        this.front++;
        return data;
    };

    getSize() {
        return this.end - this.front;
    };

    isEmpty() {
        if (this.getSize() === 0) {
            return true
        }

        return false
    };

    peek() {
        return this.isEmpty() ? null : this.items[this.front]
    };

    print() {
        if (this.isEmpty()) {
            return null
        }

        let result = '';
        for (let i = 0;i < this.end;i++) {
            result += this.items[i] + " "
        };

        return result;
    }
};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue("Hello World");

console.log(queue.print());

console.log(queue.getSize());
