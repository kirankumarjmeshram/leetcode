/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let newArr = new Array(n+1).fill(0);
    let missing = 0, duplicate = 0;

    for(const num of nums){
        newArr[num]++;
    }
    for(let i=1;i<=n;i++) {
        if(newArr[i]=== 2){
            duplicate = i;
        }if(newArr[i] === 0){
            missing = i;
        }
    }
    return [duplicate, missing]
};