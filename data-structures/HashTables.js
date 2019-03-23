/**
 * HashTable
 * Space Complexity: O(n)
 * Insert:
 * - Average: O(1)
 * - Worst: O(n)
 * Access:
 * - Average: 0(1)
 * - Worst: O(n)
 * Delete:
 * - Average: O(1)
 * - Worst: O(n)
 * @param size
 * @returns {*}
 * @constructor
 */
function HashTable(size) {
    return {
        storage: [],
        limit: size || 10,
        print() {
            console.log(this.storage);
        },
        hash(string, base) {
            let hash = 0;

            for(let i = 0 ; i < string.length ; i++) {
                hash += string.charCodeAt(i);
            }

            return hash % base;
        },
        add(key, value) {
            let index = this.hash(key, this.limit);

            if(this.storage[index] === undefined) {
                this.storage[index] = [
                    [key, value]
                ];
            } else {
                let inserted = false;
                for(let i = 0 ; i < this.storage.length ; i++) {
                    if(this.storage[index][i][0] === key) {
                        this.storage[index][i][1] = value;
                        inserted = true;
                    }
                }
                if(inserted === false) {
                    this.storage[index].push([key, value]);
                }
            }
        },
        remove(key) {
            let index = this.hash(key, this.limit);
            if(this.storage[index].length === 1 && this.storage[index][0][0] === key) {
                delete this.storage[index];
            } else {
                for(let i = 0 ; i < this.storage[index] ; i++) {
                    if(this.storage[index][i][0] === key) {
                        delete this.storage[index][i];
                    }
                }
            }
        },
        lookup(key) {
            let index = this.hash(key, this.limit);
            if(this.storage[index] === undefined) {
                return undefined;
            } else {
                for(let i = 0 ; i < this.storage[index].length ; i++) {
                    if(this.storage[index][i][0] === key) {
                        return this.storage[index][i][1];
                    }
                }
            }
        },
    }
}

let ht = new HashTable();

ht.add('John Doe', 27);

// console.time('Insert:');
// ht.add('Jane Doe', 42);
// console.timeEnd('Insert:');
//
// console.time('Lookup:');
// console.log(ht.lookup('Jane Doe'));
// console.timeEnd('Lookup:');
//
// console.time('Remove:');
// ht.remove('Jane Doe');
// console.timeEnd('Remove:');
module.exports = HashTable;
