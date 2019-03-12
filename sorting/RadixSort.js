/**
 * RadixSort Algorithm
 * Average: O(kn)
 */
var generateArrayOfIntegers = require('../utilities/generateArrayOfIntegers');

var list = generateArrayOfIntegers(3, 20);

function radixSort(list) {
    const max = Math.max(...list) * 10;
    let divisor = 10;

    while(divisor < max) {
        let buckets = [...Array(divisor)].map(() => []);

        for(let num of list) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        list = [].concat.apply([], buckets);
        divisor *= 10;
    }

    return list;
}

console.log(list);
console.time('Sort');
list = radixSort(list);
console.timeEnd('Sort');
console.log(list);
