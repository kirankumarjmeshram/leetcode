/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    count = 0
    for(let num of nums) {
    //    if(countDigit(num)%2 === 0){
        if((num>9) && (num <=99) || 
            (num>999) && (num <=9999) ||
            (num>99999) && (num <=999999) 
            ){
                 count++;
            }
       
       
    }
    return count;
};

// function countDigit(num){
//     let count = 0;
//     while(num>0){
//         num = Math.floor(num/10);
//         count++;
//     }
//     return count;
// }