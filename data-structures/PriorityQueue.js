function createQueue() {
    const queue = [];

    return {
        // add
        enqueue(item) {
            queue.unshift(item);
        },
        // remove
        dequeue() {
            return queue.pop();
        },
        // peek
        peek() {
            return queue[queue.length - 1];
        },
        // length
        get length() {
            return queue.length;
        },
        // isEmpty
        isEmpty() {
            return queue.length === 0;
        }
    };
}

function createPriorityQueue() {
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return {
        // enqueue
        enqueue(item, isHighPriority = false) {
            isHighPriority
                ? highPriorityQueue.enqueue(item)
                : lowPriorityQueue.enqueue(item);
        },

        // dequeue
        dequeue() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue();
            }

            return lowPriorityQueue.dequeue();
        },

        // peek
        peek() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek();
            }

            return lowPriorityQueue.peek();
        },

        // length
        get length() {
            return highPriorityQueue.length + lowPriorityQueue.length;
        },

        // isEmpty
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
        }
    };
}

const q = createPriorityQueue();

q.enqueue('Fix bug 1');
q.enqueue('Fix bug 2', true);
q.enqueue('Fix bug 3');
// console.log(q.length);
// console.log(q.peek());
// q.dequeue();
// console.log(q.length);

module.exports = createPriorityQueue;
