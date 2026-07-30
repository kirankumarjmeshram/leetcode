/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    num = num.split("").map(Number)
    let even = 0, odd = 0;
    for(let i=0; i<num.length;i++){
        let n = num[i];
        if(i%2 === 1){
            odd+=n;
        }else{
            even+=n;
        } 
    }
    console.log(even, " ", odd)
    return even === odd
};