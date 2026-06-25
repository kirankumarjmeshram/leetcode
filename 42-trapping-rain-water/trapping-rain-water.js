/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let count = 0;
    while(left < right) {
        if(leftMax < rightMax){
            left++;
            leftMax = Math.max(leftMax, height[left]);
            count += leftMax - height[left]
        }else{
            right--;
            rightMax = Math.max(rightMax, height[right]);
            count+= rightMax - height[right];
        }
    }
    return count;
};