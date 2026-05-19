/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    while(true){
        let a = rand7();
        let b = rand7();
        let ans = (a-1)*7+b
        if(ans<=40){
            return ans%10+1
        }
    }
};