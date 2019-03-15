/**
 * LinearSearch
 * Average: O(n)
 * Worst: O(n)
 */

let values = [4, 6, 2, 1, 9, 8, 5];

function linearSearch(haystack, needle) {
    for(let i = 0 ; i < haystack.length ; i++) {
        if(haystack[i] === needle) {
            return i;
        }
    }

    return -1;
}

console.time('Search:');
console.log(linearSearch(values, 7));
console.timeEnd('Search:');
