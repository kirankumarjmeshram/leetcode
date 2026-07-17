/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    for(let asteroid of asteroids){
        let flag = true;
        while (flag &&
            stack.length > 0 &&
            stack[stack.length-1] > 0 && 
            asteroid < 0 
            ){
                const top = stack[stack.length-1]
            if(Math.abs(top) < Math.abs(asteroid)){
                stack.pop()
            }else if(Math.abs(top) === Math.abs(asteroid)){
                stack.pop();
                flag = false; // astroid destroy
            }else{
                flag = false; // astroid is larger than top so current astroid explode
            }
        }
        if(flag){
            stack.push(asteroid)
        }
    }
    return stack;
};