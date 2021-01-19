class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    }

    push(data) {
        this.top++;
        this.items[this.top] = data;
    };

    pop() {
        let deletedData;

        if (this.top) {
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData
        }

        return null;
    };

    getSize() {
        return this.top;
    };

    isEmpty() {
        return this.getSize() === 0 ? true : false;
    };

    peek() {
        return this.isEmpty() ? null : this.items[this.top];
    };

    print() {
        let results = '';
        for (let i = this.top;i > 0;i--) {
            results += this.items[i] + ' ';
        }

        return results;
    }
};

const stack = new Stack;
stack.push("Libro #1");
stack.push("Libro #2");
stack.push("Libro #3");

console.log(stack.pop());
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.print());

console.log(stack);