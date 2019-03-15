/**
 * BinarySearch (only on sorted array)
 * Average: O(log n)
 * Worst: O(log n)
 * Best: O(1)
 */

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(haystack, left, right, needle) {
    if(right >= left) {
        let middle = Math.floor((left + right) / 2);

        if(haystack[middle] === needle) {
            return middle;
        }

        if(haystack[middle] > needle) {
            return binarySearch(haystack, left, middle - 1, needle);
        }

        return binarySearch(haystack, middle + 1, right, needle);
    }

    return -1;
}

console.time('Search:');
console.log(binarySearch(values, 0, values.length, 1));
console.timeEnd('Search:');
