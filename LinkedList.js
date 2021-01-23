class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const node = new Node(data, null);
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        const node = new Node(data);
        let current = this.head;
        let previus;

        if (index === 0) {
            node.next = current;
            this.head = node;
        } else {
            for (let i = 0;i < index; i++) {
                previus = current;
                current = current.next;
            }

            node.next = current;
            previus.next = node;
        };
        this.size++;
    };

    print() {
        if (this.size !== 0){
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        };

        result += 'X'
        return result
        } 
        return null;
    };

    removeData(data) {
        let current = this.head;
        let previus = null;

        while (current != null) {
            if (current.data === data) {
                if (!previus) {
                    this.head = current.next;
                } else {
                    previus.next = current.next;
                }
                this.size--;
                return current.data;
            } 
            previus = current;
            current = current.next;
        }
        return null;
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        let previus = null;

        if (index == 0) {
            this.head = current.next;    
        } else {
            for (let i = 0;i < index; i++) {
                previus = current;
                current = current.next;
            }
            previus.next = current.next;
        }
    }

    isEmpty() {
        if (this.size == 0) {
            return true;
        }

        return false;
    }

    getSize() {
        return this.size;
    }
};

const list = new LinkedList();
list.add(12);
list.add(10);
list.add(99);
list.removeFrom(0);

console.log(list.getSize());

// console.log(list.removeData(12));
console.log(list.print());
console.log(list);