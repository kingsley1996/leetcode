function maxAreaOfIsland(grid) {
    if (!grid || grid.length === 0) return 0;

    let maxArea = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) {
            return 0;
        }

        grid[r][c] = -1;

        let area = 1;
        area += dfs(r - 1, c); 
        area += dfs(r + 1, c);
        area += dfs(r, c - 1);
        area += dfs(r, c + 1);

        return area;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                maxArea = Math.max(maxArea, dfs(r, c));
            }
        }
    }

    return maxArea;
}

// Time complexity: O(Rows * Cols)
// Space complexity: O(Rows * Cols)