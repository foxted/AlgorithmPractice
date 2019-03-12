/**
 * MergeSort Algorithm
 * Average: O(n log(n))
 * Worst: O(n log(n))
 */
var generateArray = require('../utilities/generateArray');

var list = generateArray(10);

function mergeSort(list) {
   var helper = [];
   sort(list, helper, 0, list.length - 1);
}

function sort(list, helper, low, high) {
    if(low < high) {
        var middle = Math.floor((low + high) / 2);
        sort(list, helper, low, middle);
        sort(list, helper, middle + 1, high);
        merge(list, helper, low, middle, high);
    }
}

function merge(list, helper, low, middle, high) {
    for(var i = low ; i <= high ; i++) {
        helper[i] = list[i];
    }

    var helperLeft = low;
    var helperRight = middle + 1;
    var current = low;

    while (helperLeft <= middle && helperRight <= high) {
        if(helper[helperLeft] <= helper[helperRight]) {
            list[current] = helper[helperLeft];
            helperLeft++;
        } else {
            list[current] = helper[helperRight];
            helperRight++;
        }
        current++;
    }

    var remaining = middle - helperLeft;
    for(var i = 0 ; i <= remaining ; i++) {
        list[current + i] = helper[helperLeft + i];
    }
}

console.log(list);
console.time('Sort');
mergeSort(list);
console.timeEnd('Sort');
console.log(list);
