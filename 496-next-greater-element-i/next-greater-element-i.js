/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let n = nums1.length;
    let ans = new Array(n).fill(-1);
    let m = nums2.length;

    for(let i=0;i<n;i++){
        let num = nums1[i]
        idx = nums2.indexOf(num);
        for(let j=idx+1;j<m;j++) {
            if(nums2[j]>num){
                ans[i] = nums2[j];
                break
            }
        }
    }
    return ans;
};