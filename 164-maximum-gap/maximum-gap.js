/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumGap = function(nums) {
//     let n = nums.length;
//     if(n<2) return 0;
//     let gap =0;
//     nums = nums.sort((a,b) => a-b);
//     for(let i=1;i<n;i++) {
//         gap = Math.max(gap,nums[i] -nums[i-1]);
//     }
//     return gap;
// };

var maximumGap = function(nums) {
    const n = nums.length;
    if (n < 2) return 0;

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    if (min === max) return 0;
    let bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)));
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    let buckets = new Array(bucketCount).fill(null).map(() => ({
        min: Infinity,
        max: -Infinity,
        used: false
    }));

    for (let num of nums) {
        let idx = Math.floor((num - min) / bucketSize);
        buckets[idx].used = true;
        buckets[idx].min = Math.min(buckets[idx].min, num);
        buckets[idx].max = Math.max(buckets[idx].max, num);
    }
    let maxGap = 0;
    let prevMax = min;
    for (let bucket of buckets) {
        if (!bucket.used) continue;
        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }

    return maxGap;
};