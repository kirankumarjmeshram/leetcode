/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b)=> a-b);
    let result = [];
    Helper(candidates,target,result,0,[]);
    return result;
};

function Helper(candidates, target, result,index,current) {
    if(target === 0){
        result.push([...current]);
        return;
    }
    if(target < 0){
        return;
    }
    for(let i=index;i<candidates.length;i++) {
        if(candidates[i] > target){
            break;
        }
        if(i>index && candidates[i] === candidates[i-1]){ 
            continue;
        }
        current.push(candidates[i]);
        Helper(candidates,target - candidates[i], result,i+1, current);
        current.pop();
    }
}