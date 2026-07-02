/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let n = s.length;
    if (n !== t.length) return false;
    let mapS = {};
    let mapT = {};
    for (let i = 0; i < n; i++) {
        mapS[s[i]] = (mapS[s[i]] || 0) +1
    }

    for (let i = 0; i < n; i++) {
        mapT[t[i]] = (mapT[t[i]] || 0) +1
    }

    for (let el of Object.keys(mapS)) {
        if (mapS[el] !== mapT[el]) {
            return false;
        }
    }
    return true;
};