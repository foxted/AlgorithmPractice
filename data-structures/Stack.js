function createStack() {
    const stack = [];

    return {
        // push
        push(item) {
            stack.push(item);
        },
        // pop
        pop() {
            return stack.pop();
        },
        // peek
        peek() {
            return stack[stack.length - 1];
        },
        // length
        get length() {
            return stack.length;
        },
        // isEmpty
        isEmpty() {
            return stack.length === 0;
        }
    }
}

const lowerBodyStack = createStack();
lowerBodyStack.push('Underwear');
lowerBodyStack.push('Socks');
lowerBodyStack.push('Pants');
lowerBodyStack.push('Shoes');
// console.log(lowerBodyStack.peek());
// lowerBodyStack.pop();
// console.log(lowerBodyStack.peek());
// lowerBodyStack.pop();
// console.log(lowerBodyStack.length);

module.exports = createStack;
