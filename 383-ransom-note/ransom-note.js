/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map  = {};
    for(let el of magazine) {
        map[el] = (map[el] || 0) +1;
    }
    for(let el of ransomNote) {
        if(!map[el]) {
            return false
        }
        map[el] --;
    }
    return true;
};