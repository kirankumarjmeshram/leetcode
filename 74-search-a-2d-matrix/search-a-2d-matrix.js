/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // let row = 0;
    // let col = matrix[0].length - 1;
    // while(row<matrix.length && col>=0){
    //     if(target === matrix[row][col]){
    //         return true;
    //     }if(target < matrix[row][col]){
    //         col--;
    //     }else{
    //         row++
    //     }
    // }
    // return false;

    let rows = matrix.length;;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols-1;
    while(left<=right){
        let mid = left + Math.floor((right-left)/2);
        let row = Math.floor(mid/cols);
        let col = mid%cols
        let value = matrix[row][col];
        if(target === value){
            return true;
        }if(target < value){
            right = mid-1;
        }else{
            left = mid+1
        }
    }
    return false;
};