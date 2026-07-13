/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let token of tokens) {
        if(isNaN(token)) {
            let a = stack.pop();
            let b = stack.pop();

            if(token === '+') stack.push(a+b);
            if(token === '-') stack.push(b-a);
            if(token === '*') stack.push(a*b);
            if(token === "/") stack.push(Math.trunc(b/a));
        }else{
            stack.push(Number(token));
        }
    }
    return stack.pop();
};
