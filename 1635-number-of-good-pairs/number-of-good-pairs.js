/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count=0;
    // let n = nums.length;
    // for(let i=0;i<n;i++){
    //     for(let j=i+1;j<n;j++) {
    //         if((nums[i] == nums[j])&&(i < j)) count++;
    //     }
    // }
    // return count;
    let freqArray = new Array(101).fill(0);
    for(let num of nums){
        count+=freqArray[num];
        freqArray[num]++;
    }
    return count;
};