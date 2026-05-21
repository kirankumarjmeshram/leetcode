/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // let letters =[ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // for(let letter of letters){
    //     if(!sentence.includes(letter)){
    //         return false;
    //     }
    // }
    // return true;
    let freqArr = new Array(26).fill(false);
    let distinctChar = 0;
    for(let s of sentence ){
        if(freqArr[s.charCodeAt(0)-97]===false){
            freqArr[s.charCodeAt(0)-97]=true;
            distinctChar++;
        }
    }
    return distinctChar===26

};