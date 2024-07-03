function reverseString(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        let temp;
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
};

// Time complexity: O(N)
// Space complexity: O(1)