function stringSwapBoolean(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return false;

    var index = null;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (index !== null) {
                let characters = s1.split('');

                characters[index] = s2[index];
                characters[i] = s2[i];

                return characters.join('') === s2;
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
