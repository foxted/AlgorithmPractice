// @TODO Rewrite this to find minimum swaps required to make s1 === s2
function swap(arr, first, last) {
    let tmp = arr[first];
    arr[first] = arr[last];
    arr[last] = tmp;
}

function swapString(string, first, last) {
    if(first === last) return string;

    let tmp = string.split('');
    swap(tmp, first, last);
    return tmp.join('');
}

function stringMinimumSwap(s1, s2) {
    if (s1.length !== s2.length) return -1;
    if (s1 === s2) return 0;

    let map = {};

    for(let i = 0 ; i < s2.length ; i++) {
        if(map[s2[i]]) {
            map[s2[i]].push(i);
        } else {
            map[s2[i]] = [i];
        }
    }

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
