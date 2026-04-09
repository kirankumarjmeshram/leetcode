/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let ans = new Array(n).fill(0);
    let stack = [];
    for(let i=0;i<n;i++) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]] ){
            let prev = stack.pop();
            ans[prev] = i - prev;
        }
        stack.push(i);
    }
    return ans;
    // let ans = [];
    // for(let i=0;i<n;i++) {
    //     let count = 0;
    //     for(let j=i+1;j<n;j++){
    //         count++
    //         if(temperatures[i] < temperatures[j]){
    //             ans[i] = count;
    //             break;
    //         }  
    //     }
    //     if (ans[i] === undefined) ans[i] = 0;
    // }
    // return ans;

};