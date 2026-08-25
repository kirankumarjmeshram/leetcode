/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n = heights.length;
    let maxArea = 0;
    let leftArr = new Array(n).fill(0);
    let rightArr = new Array(n).fill(0);
    let stack = [];
    // heights = [2,1,5,6,2,3]
    //Nearest smaller to left
    for(let i=0;i<n;i++) {
        while(stack.length && heights[stack[stack.length-1]] >= heights[i]) {
            stack.pop();
        }
        leftArr[i] = stack.length === 0? 0 :stack[stack.length-1]+1;
        stack.push(i);
    }
    stack = [];
    for(let i=n-1;i>=0;i--) {
        while(stack.length && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        rightArr[i] = stack.length === 0?n-1:stack[stack.length-1]-1;
        stack.push(i);
    }

    for(let i=0;i<n;i++){
        maxArea = Math.max(maxArea, heights[i]*(rightArr[i]-leftArr[i]+1))
    }
    return maxArea;
};