/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    //let matrix = Array.from({ length: n }, () => new Array(n));
    let matrix = Array.from({length:n}, ()=> new Array(n));
    let top = 0, left=0, bottom = n-1, right = n-1, count = 1;

    while (top<=bottom && left <= right ){
        for(let i = left; i<=right;i++){
            matrix[top][i] = count;
            count++;
        }
        top++
        for(let i=top;i<=bottom;i++){
            matrix[i][right] = count;
            count++;
        }
        right--;

        for(let i=right;i>=left;i--){
            matrix[bottom][i] = count;
            count++;
        }
        bottom--;
        for(let i=bottom;i>= top;i--) {
            matrix[i][left] = count
            count++;
        }
        left++;
    }
    return matrix;

};