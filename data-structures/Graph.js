const createQueue = require('./Queue');

function createNode(key) {
    const neighbours = [];
    return {
        key,
        neighbours,
        addNeighbour(node) {
            neighbours.push(node);
        }
    }
}

function createGraph(directed = false) {
    const nodes = [];
    const edges = [];

    return {
        directed,
        nodes,
        edges,

        addNode(key) {
            nodes.push(createNode(key));
        },

        getNode(key) {
            return nodes.find(node => node.key === key);
        },

        addEdge(node1key, node2key) {
            const node1 = this.getNode(node1key);
            const node2 = this.getNode(node2key);

            if(!node1 || !node2) return false;

            node1.addNeighbour(node2);
            edges.push(`${node1key}-${node2key}`);

            if(!directed) {
                node2.addNeighbour(node1);
            }
        },

        print() {
            return nodes.map(({ key, neighbours }) => {
                let result = key;

                if(neighbours.length) {
                    result += ` => ${neighbours.map(neighbour => neighbour.key).join(' ')}`;
                }

                return result;
            }).join('\n');
        },

        breadthFirstSearch(startingNodeKey, visitFn) {
            const startingNode = this.getNode(startingNodeKey);
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false;
                return acc;
            }, {});
            const queue = createQueue();
            queue.enqueue(startingNode);

            while(!queue.isEmpty()) {
                const currentNode = queue.dequeue();

                if(!visited[currentNode.key]) {
                    visitFn(currentNode)
                    visited[currentNode.key] = true;
                }

                currentNode.neighbours.forEach(node => {
                    if(!visited[node.key]) {
                        queue.enqueue(node);
                    }
                })
            }
        },

        depthFirstSearch(startingNodeKey, visitFn) {
            const startingNode = this.getNode(startingNodeKey);
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false;
                return acc;
            }, {});

            function explore(node) {
                if(visited[node.key]) return;

                visitFn(node);
                visited[node.key] = true;

                node.neighbours.forEach(node => {
                    explore(node);
                })
            }

            explore(startingNode);
        }
    }
}

/**
 *  a => b <= c
 *  |  \ |  \ |
 *  f    e <= d
 */
const graph = createGraph(true);
const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
const edges = [
    ['a', 'b'],
    ['a', 'e'],
    ['a', 'f'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'b'],
    ['d', 'c'],
    ['d', 'e'],
];
nodes.forEach(node => {
    graph.addNode(node);
});
edges.forEach(nodes => {
    graph.addEdge(...nodes);
});
/**
 * Breadth First Search Demo
 */
// console.log('Breadth First Search');
// graph.breadthFirstSearch('a', (node) => {
//     console.log(node.key);
// })

/**
 * Depth First Search Demo
 */
// console.log('Depth First Search');
// graph.depthFirstSearch('a', (node) => {
//     console.log(node.key);
// })

exports.createNode = createNode
exports.createGraph = createGraph
