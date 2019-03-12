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
    }
}

const q = createQueue();

console.info('Is empty is working:', q.isEmpty());
q.enqueue('Learn about queues');
q.enqueue('Try to implement a queue');
q.enqueue('Consolidate learnings');
q.enqueue('Get a job');
console.info('Queue can have items:', q.length > 0);
console.info('Display first element of queue:', q.peek());
q.dequeue();
console.info('Display the next element of queue:', q.peek());

module.exports = createQueue
