/**
 * QuickSort Algorithm
 * Average: O(n log(n))
 * Worst: O(n^2)
 */
var generateArrayOfIntegers = require('../utilities/generateArrayOfIntegers');

var list = generateArrayOfIntegers(10);

function quickSort(list, left, right) {
    left = left || 0;
    right = right || list.length - 1;
    var index = partition(list, left, right);

    if(left < index - 1) {
        quickSort(list, left, index - 1);
    }

    if(index < right) {
        quickSort(list, index, right);
    }
}

function partition(list, left, right) {
    var pivot = list[Math.floor((left + right) / 2)];

    while(left <= right) {
        while(list[left] < pivot) left++;
        while(list[right] > pivot) right--;

        if(left <= right) {
            swap(list, left, right);
            left++;
            right--;
        }
    }

    console.log(list);

    return left;
}

function swap(list, left, right) {
    var tmp = list[left];
    list[left] = list[right];
    list[right] = tmp;
}

console.log(list);
console.time('Sort');
quickSort(list);
console.timeEnd('Sort');
console.log(list);
