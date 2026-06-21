/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = Array.from({length:n},()=> Array(n).fill("."));
    let result = [];
    Helper(n,board,result,0)
    return result;
};

function Helper(n,board,result, row) {
    if(row === n) {
        result.push(board.map(row => row.join("")));
        return;
    }
    for(let col = 0;col < n; col++) {
        if(isSafe(board, row, col)){
            board[row][col] = "Q";
            Helper(n,board, result,row+1);
            board[row][col] = ".";
        }
    }
}
function isSafe(board, row, col){
    let n = board.length;
    //top
    // [ "..Q.",
    //  "Q...",
    //  "...Q",
    //  ".Q.."]
    for(let i=row; i>=0; i--){
        if(board[i][col] === "Q"){
            return false;
        }
    }
    //left diagonal
    for(let i= row-1,j=col-1; i>=0 && j>=0;i--,j--) {
        if(board[i][j] === "Q"){
            return false
        }
    }
    //right digonal
    for(let i= row-1,j=col+1; i>=0 && j<n ;i--,j++) {
        if(board[i][j] === "Q"){
            return false
        }
    }
    return true;
}