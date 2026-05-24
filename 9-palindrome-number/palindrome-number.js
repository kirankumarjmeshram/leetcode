/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if(x<0) return false;
    let arr =[];
    while(x>0)
    {
        arr.push(x%10);
        x =Math.floor(x/10);
    }
    let n = arr.length;
    for(let i=0;i<Math.floor(n/2);i++){
        if(arr[i]!==arr[n-i-1]){
            return false;
        }
    }
    return true;
};