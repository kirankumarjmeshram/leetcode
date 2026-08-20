/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let first = strs[0];

    for(let i=0;i<first.length;i++) {
        let char = first[i];

        for(let j=1; j< strs.length; j++) {
            if(strs[j][i] !== char){
                return first.substring(0,i);
            }
        }
    }
    return first;
};