/**
 * @param {number} n
 * @return {number}
 */
 //We will extract each bit from n and place it in reverse position
 // and place bit at reverse position
var reverseBits = function(n) {
    let ans = 0;
    for(let i=0;i<32;i++){
        let bit = (n>>i)&1;
        ans += bit<<(31-i)
    }
    return ans;
};

