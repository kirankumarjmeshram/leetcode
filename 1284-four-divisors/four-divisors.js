/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let divisorSum = 0;
    for(let num of nums){
        count=0;
        sum = 0;
        // for(let i=1;i<=num;i++){
        //     if(num%i === 0){
        //         count++;
        //         sum+=i;
        //     }
        // }
        for(let i=1;i<=Math.floor(Math.sqrt(num));i++){
            if(num%i === 0){
                let pair = num/i
                if(i === pair){ // as if i===pair ie i*pair = num ie perfect square so only one divisor
                    count++;
                    sum+=i;
                }else{
                    count+=2;
                    sum+=i + pair;
                }

            }
        }
        if(count===4){
            divisorSum+=sum;
        }
    }
    return divisorSum;
};