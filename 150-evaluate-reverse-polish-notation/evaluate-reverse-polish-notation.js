/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let t of tokens){
        if(t === '+') {
            stack.push(stack.pop()+stack.pop())
        }else if(t === '-') {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        }else if(t === '*'){
            stack.push(stack.pop()*stack.pop())
        }else if(t === "/") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(parseInt(first/second));
        }else{
            stack.push(parseInt(t))
        }
    }
    return stack[0]
};