/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    Helper(candidates, target, result, 0,[]);
    return result;
};

function Helper(candidates, target, result, index, current){
    let n = candidates.length;
    if(target === 0) {
        result.push([...current]);
        return;
    }
    if(target < 0){
        return;
    } 
    for(let i=index;i<n;i++) {
        current.push(candidates[i]);
        Helper(candidates, target - candidates[i],result, i, current);
        current.pop();
    }
}