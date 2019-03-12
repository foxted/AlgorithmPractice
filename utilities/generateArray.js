function generateArray(n) {
    var list = [];

    for(var i = 0 ; i < n ; i++) {
        list.push(Math.floor(Math.random() * 100));
    }

    return list;
}

module.exports = generateArray;
