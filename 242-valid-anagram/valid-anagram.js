/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let n = s.length;
    if (n !== t.length) return false;
    let map = {};
    for (let el of s) {
        map[el] = (map[el] || 0) +1
    }

    for (let el of t) {
        if(!map[el]) return false;
        map[el]--;
    }

    return true;
};