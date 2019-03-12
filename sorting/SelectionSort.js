/**
 * SelectionSort
 * Average: O(n^2)
 * Worst: O(n^2)
 */
var generateArrayOfIntegers = require('../utilities/generateArrayOfIntegers');

var list = generateArrayOfIntegers(10);

function selectionSort(list) {
    for(var i = 0 ; i < list.length ; i++) {
        for(var j = i + 1 ; j < list.length ; j++) {
            if(list[i] > list[j]) {
                swap(list, i, j);
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
selectionSort(list);
console.timeEnd('Sort');
console.log(list);
