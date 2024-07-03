function canVisitAllRooms(rooms) {
    const visited = new Set();
    const stack = [0];

    visited.add(0);

    while (stack.length > 0) {
        let currentRoom = stack.pop();

        for (const key of rooms[currentRoom]) {
            if (!visited.has(key)) {    
                visited.add(key);
                stack.push(key);
            }
        }
       
    }

    return visited.size === rooms.length;
};

// Time complexity: O(N + E) 
// Space complexity: O(N)
