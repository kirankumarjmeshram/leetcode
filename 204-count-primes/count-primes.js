/**
 * @param {number} n
 * @return {number}
 */

// var countPrimes = function(n) {
//     let count = 0;
//     for(let i=2;i<n;i++){
//         if(isPrime(i)){
//             count++;
//         }
//     }
//     return count;
// };
// function isPrime(num){
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
var countPrimes = function(n) {
    let count = 0;
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    let m = Math.sqrt(n);
    for(let i=2;i<=m;i++){
        if(isPrime[i]){
            for(let j=i*i;j<n;j+=i) {
                isPrime[j] = false
            }
        }
    }
    for(let i=0;i<n;i++){
        if(isPrime[i]) count++;
    }

    return count;
};