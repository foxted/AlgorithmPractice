/**
 * Find out if a string can match another in one swap only
 * Best: O(n)
 * Average: O(n)
 * Space complexity: O(1)
 * @param s1
 * @param s2
 * @returns {boolean}
 */
function stringSwapBoolean(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return false;

    var index = null;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (index !== null) {
                return swapString(s1, index, i) === s2;
            }

            index = i;
        }
    }

    return false;
}

console.log('time', 'mite:', stringSwapBoolean('time', 'mite')); // true

console.log('pool', 'loop:', stringSwapBoolean('pool', 'loop')); // true

console.log('bouda', 'bouda:', stringSwapBoolean('bouda', 'bouda')); // false

console.log('pool', 'loopy:', stringSwapBoolean('pool', 'loopy')); // false

console.log('abc', 'cab:', stringSwapBoolean('abc', 'cab')); // false

/**
 * Swap two elements in array
 * @param arr
 * @param first
 * @param last
 */
function swap(arr, first, last) {
    let tmp = arr[first];
    arr[first] = arr[last];
    arr[last] = tmp;
}

/**
 * Swap two characters in a string
 * @param string
 * @param first
 * @param last
 * @returns {*}
 */
function swapString(string, first, last) {
    if(first === last) return string;

    let tmp = string.split('');
    swap(tmp, first, last);
    return tmp.join('');
}
