/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    // let prev = n&1
    // while(n) {
    //     n>>=1
    //     let curr = n&1;
    //     if(prev === curr){
    //         return false
    //     }
    //     prev = curr
    // }
    // return true;
    let x = n^(n>>1);
    return !(x&(x+1));
};