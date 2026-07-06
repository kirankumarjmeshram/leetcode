/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let n = s.length;
    let length = 0;
    let visited = new Set();

    for(let right = 0;right<n;right++) {
        while(visited.has(s[right])){
            visited.delete(s[left]);
            left++;
        }
        visited.add(s[right])
        length = Math.max(length, right-left+1)
    }
    return length;
};