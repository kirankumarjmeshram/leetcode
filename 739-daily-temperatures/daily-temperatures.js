/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let warmerTemp = new Array(n).fill(0);
    for(let i=0;i<n;i++) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            let prev = stack.pop();
            warmerTemp[prev] = i - prev;
        }
        stack.push(i);
    }
    return warmerTemp;
};