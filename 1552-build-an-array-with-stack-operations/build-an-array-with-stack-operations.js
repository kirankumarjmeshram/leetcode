/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stack = [];
    let idx = 0;
    for(let i=1;i<=n;i++) {
        if(idx>=target.length) break;
        stack.push("Push")
        if(target[idx] === i){
            
            idx++;
        }else{
            stack.push("Pop")
        }
    }
    return stack;
};