class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let grid = new Map();
        for(let i =0; i <board.length; i++){
            let row = new Set();
            let gridrow = Math.ceil((i+1)/3)
            for(let j=0; j<board[i].length; j++){
                let gridcolumn = Math.ceil((j+1)/3);
                if(board[i][j] === "."){
                    continue;
                }
                if(row.has(board[i][j])){
                    return false;
                }
                else{
                    row.add(board[i][j]);
                }
                let gridnum = gridrow + "," + gridcolumn;
                if(!grid.has(gridnum)) {
                    grid.set(gridnum, [board[i][j]]);
                }
                else if(grid.get(gridnum)?.includes(board[i][j])){
                    return false;
                }
                else{
                    grid.get(gridnum).push(board[i][j]);
                }
                
            }
        }

        for(let i =0; i <board.length; i++){
            let column = new Set();
            for(let j=0; j < board[i].length; j++){
                if(board[j][i] === "."){
                    continue;
                }
                if(column.has(board[j][i])){
                    return false;
                }
                else{
                    column.add(board[j][i]);
                }
            }
        }
        return true;
    }
}
