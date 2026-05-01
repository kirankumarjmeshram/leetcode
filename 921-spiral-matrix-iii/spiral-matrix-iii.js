/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let total = rows*cols;

    let directions = [
        [0,1], //right
        [1,0], // down
        [0,-1],//left
        [-1,0]
    ];
    let result = [[rStart,cStart]];
    let step = 0;
    let d = 0; //direction index;
    while(result.length < total) {
        if(d%2 === 0){
            step++;
        }
        for(i=0;i<step;i++) {
            rStart +=directions[d][0];
            cStart +=directions[d][1]
            
            if(rStart >=0 && rStart < rows && cStart>=0 && cStart < cols) {
                result.push([rStart,cStart])
            }

            if(result.length === total) {
                return result;
            }
        }
        d = (d+1) %4
    }
    return result;
};