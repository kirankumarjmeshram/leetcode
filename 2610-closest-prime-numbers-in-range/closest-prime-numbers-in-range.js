/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    let primes = new Array(right+1).fill(true);
    primes[0] = false
    primes[1] = false;
    for(let i=2;i*i<=right;i++){
        if(primes[i]){
            for(let j=i*i;j<=right;j+=i){
                primes[j] = false;
            }
        }
    }
    let allPrimes = []
    for(let i=left;i<=right;i++){
        if(primes[i]){
            allPrimes.push(i)
        }
    }
    let n = allPrimes.length;
    let result = [-1,-1];
    let minDiff = Infinity;
    for(let i=1;i<n;i++){
        let diff = allPrimes[i] - allPrimes[i-1]
        if(diff<minDiff){
            result = [allPrimes[i-1] , allPrimes[i]];
            minDiff =diff
        }
    }
    return result;

}; 