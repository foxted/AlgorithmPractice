/**
 * Minimum swap required to match anagram,
 * * if possible return number of swap
 * * if equal return 0
 * * if impossible return -1
 * Best: O(n)
 * Average: O(n)
 * Space complexity: O(n)
 * @param s1
 * @param s2
 * @returns {number}
 */
function stringMinimumSwap(s1, s2) {
    if (s1.length !== s2.length) return -1;
    if (s1 === s2) return 0;

    let map = createMap(s2);

    let counter = 0;

    for (let i = 0 ; i < s1.length ; i++) {
        if(!map[s1[i]]) return -1;
        let positions = map[s1[i]];

        for(let j = 0 ; j < positions.length ; j++) {
            let index = positions[j];

            if(s1[i] !== s1[index]) {
                s1 = swapString(s1, i, index);
                counter++;
            }
        }
    }

    return s1 === s2 ? counter : -1;
}

console.log('time', 'mite:', stringMinimumSwap('time', 'mite')); // = 1

console.log('bob', 'sac:', stringMinimumSwap('bob', 'sac')); // = -1

console.log('hello', 'hello:', stringMinimumSwap('hello', 'hello')); // = 0

console.log('listen', 'silent:', stringMinimumSwap('listen', 'silent')); // = 3

console.log('silver', 'livers:', stringMinimumSwap('silver', 'livers')); // = 4

/**
 * Create a map of characters for destination string
 * @param string
 */
function createMap(string) {
    let map = {};

    for(let i = 0 ; i < string.length ; i++) {
        if(map[string[i]]) {
            map[string[i]].push(i);
        } else {
            map[string[i]] = [i];
        }
    }

    return map;
}

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
