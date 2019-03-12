function generateArrayOfIntegers(n, limit) {
    limit = limit || 100;
    var list = [];

    for(var i = 0 ; i < n ; i++) {
        list.push(Math.floor(Math.random() * (limit + 1)));
    }

    return list;
}

module.exports = generateArrayOfIntegers;
