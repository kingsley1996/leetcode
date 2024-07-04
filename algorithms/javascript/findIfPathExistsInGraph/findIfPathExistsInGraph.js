function validPath(n, edges, source, destination) {
    const graph = Array.from({ length: n }, () => []);
    const visited = Array(n).fill(false);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    function dfs(node) {
        if (node === destination) {
            return true;
        }
        visited[node] = true;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor] && dfs(neighbor)) {
                return true;
            }
        }
        return false;
    }
    return dfs(source);
}

// Time complexity: O(V + E)
// Space complexity: O(V)