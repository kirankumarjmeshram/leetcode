/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
    let left = 0;
    let right = 5*k + 5;
    while(left<=right) {
        let mid = left + Math.floor((right-left)/2);
        if(endZeros(mid)<k) {
            left = mid+1;
        }else{
            right =  mid - 1
        }
    }
    return endZeros(left) ===k?5:0;
};

function endZeros(n){
    let total = 0;
    while(n>0){
        n = Math.floor(n/5);
        total+=n;
    }
    return total;
}