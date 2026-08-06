/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({length:9}, ()=> new Set());
    let cols = Array.from({length:9}, ()=> new Set());
    let grids = Array.from({length:9}, ()=> new Set());

    for(let row=0;row<9;row++) {
        for(let col=0;col<9;col++) {
            let element = board[row][col]
            let gridIdx = Math.floor(row/3)*3 + Math.floor(col/3)
            if(element === ".") continue;
            if(
                rows[row].has(element) ||
                cols[col].has(element) ||
                grids[gridIdx].has(element) 
            ) return false;
            rows[row].add(element);
            cols[col].add(element);
            grids[gridIdx].add(element);
        }
    }
    return true;
};