/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
    n = BigInt(n);
    
    let maxSize = n.toString(2).length;
    // let maxSize = 60; // as n ranges 10^18 ~= 2^60 so high base // ie max exponent eg k^m
    let minSize = 2 // 
    let maxBase = n - 1n;
    let minBase = 2n;

    for(let size = maxSize; size >= minSize; size--) {
        let high = maxBase, low = minBase;
        
        while(low < high){
            let mid = low + (high - low)/2n;
            if(getVal(size, mid) >=n){
                high = mid;
            }else{
                low = mid + 1n
            }

        }
        const val = getVal(size, high);
        if(val === n) {
            return String(high)
        }
    }
};

function getVal(size, base) {
    let val = 1n;
    for(let i=1;i<size;i++) {
        val = base * val + 1n;
    }
    return val;
}
//size = 2, base = 5
// 5*1+1 = 6*5+1 = 31