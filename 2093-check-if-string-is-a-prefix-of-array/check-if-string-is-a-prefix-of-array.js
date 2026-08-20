/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let ans = '';
    for(let word of words){
        ans+= word;
        if(ans === s) return true;
        if(ans.length > s.length) return false
    }
    return false;
};