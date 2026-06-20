/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    let epsilon = 0.1;
    return Helper(cards);
};

function Helper(nums) {
    let epsilon = 0.1;
    if(nums.length === 1) {
        return Math.abs(nums[0] - 24) < epsilon;
    }
    for(let i=0;i<nums.length;i++) {
        for(let j= i+1; j< nums.length; j++ ) {
            let a = nums[i];
            let b = nums[j];
            let next = [];
            for(let k=0;k<nums.length;k++){
                if(k!==i && k!==j) {
                    next.push(nums[k]);
                }
            }
            let possibleVals = [
                a+b,
                a-b,
                b-a,
                a*b
            ];
            if(Math.abs(a) > 0){
                possibleVals.push(b/a);
            }
            if(Math.abs(b) > 0) {
                possibleVals.push(a/b);
            }
            for (let val of possibleVals){
                next.push(val);
                if(Helper(next)) return true;
                next.pop()
            }
        }
    }
    return false;
}