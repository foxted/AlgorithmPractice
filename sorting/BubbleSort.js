/**
 * SelectionSort
 * Average: O(n^2)
 * Worst: O(n^2)
 */
var generateArrayOfIntegers = require('../utilities/generateArrayOfIntegers');

var list = generateArrayOfIntegers(10);

function bubbleSort(list) {
    for(var i = list.length - 1 ; i >= 0 ; i--) {
        for(var j = 0; j < i ; j++) {
            if(list[j] > list[j+1]) {
                swap(list, j, j + 1);
            }
        }
        console.log(list);
    }
}

function swap(list, left, right) {
    var tmp = list[left];
    list[left] = list[right];
    list[right] = tmp;
}

console.log(list);
console.time('Sort');
bubbleSort(list);
console.timeEnd('Sort');
console.log(list);
