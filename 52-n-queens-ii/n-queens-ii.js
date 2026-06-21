/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let board = Array.from({length:n},()=> Array(n).fill("."));
    let result = [];
    let column = new Set();
    let leftDiagonal =  new Set();
    let rightDiagonal = new Set();
    Helper(n,board,result,column, leftDiagonal, rightDiagonal,0)
    return result.length;
};

function Helper(n,board,result, column, leftDiagonal, rightDiagonal, row) {
        if(row === n) {
        result.push(board.map(row => row.join("")));
        return;
    }
    for(let col = 0;col < n; col++) {
        let d1 = row - col;
        let d2 = row + col;
        // if(isSafe(board, row, col)){
        //     board[row][col] = "Q";
        //     Helper(n,board, result,row+1);
        //     board[row][col] = ".";
        // }
        if(column.has(col) || leftDiagonal.has(d1) || rightDiagonal.has(d2)){
            continue;
        }
        board[row][col] = "Q";
        column.add(col);
        leftDiagonal.add(d1);
        rightDiagonal.add(d2);
        Helper(n,board,result, column, leftDiagonal, rightDiagonal, row+1);
        board[row][col] = ".";
        column.delete(col);
        leftDiagonal.delete(d1);
        rightDiagonal.delete(d2);
    }
}
// function isSafe(board, row, col){
//     let n = board.length;
//     //top
//     // [ "..Q.",
//     //  "Q...",
//     //  "...Q",
//     //  ".Q.."]
//     for(let i=row; i>=0; i--){
//         if(board[i][col] === "Q"){
//             return false;
//         }
//     }
//     //left diagonal
//     for(let i= row-1,j=col-1; i>=0 && j>=0;i--,j--) {
//         if(board[i][j] === "Q"){
//             return false
//         }
//     }
//     //right digonal
//     for(let i= row-1,j=col+1; i>=0 && j<n ;i--,j++) {
//         if(board[i][j] === "Q"){
//             return false
//         }
//     }
//     return true;
// }