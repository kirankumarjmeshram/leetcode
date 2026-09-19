/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x
    let palNum = 0;
    if(x<0) return false;

    while(x>0){
        palNum*=10;
        palNum += x%10;
        
        x = Math.floor(x/10)
    }
    console.log(palNum)
    return num===palNum;
};