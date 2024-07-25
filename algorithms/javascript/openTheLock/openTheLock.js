/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

var neighbors = function(node) {
    const result = [];
    for (let i = 0; i < 4; i++) {
        const x = parseInt(node[i]);

        for (const d of [-1, 1]) {
            const y = (x + d + 10) % 10;
            result.push(node.slice(0, i) + y + node.slice(i + 1));
        }
    }
    return result;
}

var openLock = function(deadends, target) {
    const deadSet = new Set(deadends);
    if (deadSet.has('0000')) return -1;

    const queue = [['0000', 0]];
    const visited = new Set(['0000']);

    while (queue.length > 0) {
        const [node, depth] = queue.shift();

        if (node === target) return depth;

        for (const neighbor of neighbors(node)) {
            if (!visited.has(neighbor) && !deadSet.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, depth + 1]);
            }
        }
    }

    return -1;
};

// Time complexity: O(n)
// Space complexity: O(n)