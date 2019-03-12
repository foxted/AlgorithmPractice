/**
 * CountingSort Algorithm
 * Average: O(n+k)
 * Worst: O(n+k)
 */
var generateArrayOfIntegers = require('../utilities/generateArrayOfIntegers');

var list = generateArrayOfIntegers(10);

function countingSort(list, base) {
    var count = new Array(base + 1).fill(0);

    for (var i = 0; i < list.length; i++) {
        count[list[i]]++;
    }

    for (var i = 1; i < base; i++) {
        count[i] += count[i - 1];
    }

    output = [];

    for (var i = list.length - 1 ; i >= 0 ; i--) {
        output[--count[list[i]]] = list[i];
    }

    return output;
}

console.log(list);
console.time('Sort');
list = [].concat(countingSort(list, 100));
console.timeEnd('Sort');
console.log(list);
