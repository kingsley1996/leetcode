function reachableNodes(n, edges, restricted) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const visited = Array(n).fill(false);
    const restrictedSet = new Set(restricted);
    
    let count = 0;
    
    function dfs(node) {
        visited[node] = true;
        count++;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor] && !restrictedSet.has(neighbor)) {
                dfs(neighbor)
            }
        }
    }
    
    dfs(0);
    
    return count;
}

// Time complexity: O(n + m)
// Space complexity: O(n + m)

