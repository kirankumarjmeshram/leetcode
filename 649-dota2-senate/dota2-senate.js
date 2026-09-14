/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let n = senate.length;
    let RQueue = [];
    let DQueue = [];

    for (let i=0;i<n;i++) {
        if(senate[i] === 'R') {
            RQueue.push(i);
        }else{
            DQueue.push(i);
        }
    }

    while(RQueue.length > 0 && DQueue.length > 0) {
        let r = RQueue.shift();
        let d = DQueue.shift();

        if(r<d) {
            RQueue.push(r+n);
        }else{
            DQueue.push(d+n);
        }
    }
    return RQueue.length > 0 ? "Radiant" : "Dire";
};