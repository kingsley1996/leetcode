function countComponents(n ,edges) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    const visited = Array(n).fill(false);
    let componentCount = 0;

    function dfs(node) {
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            componentCount++;
            dfs(i);
        }
    }

    return componentCount;
}

// Time complexity: O(V + E)
// Space complexity: O(V + E)