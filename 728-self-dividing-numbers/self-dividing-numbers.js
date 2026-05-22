/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans =[];
    for(let i=left; i<=right;i++){
        if(checkSelfDividingNumbers(i)){
            ans.push(i);
        }
    }
    return ans;
};

function checkSelfDividingNumbers(num){
    // let nums = [];
    let temp = num;
    while(temp>0){
        // nums.push(temp%10);
        let digit = temp%10
        if(digit===0 || num%digit!==0) return false;
        temp = Math.floor(temp/10)
    }
    // for(let n of nums){
    //     if(num%n===0){
    //         continue
    //     } else{
    //         return false
    //     }
    // }
    return true;
}
