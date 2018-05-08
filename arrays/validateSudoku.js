/* Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable. */

function sudoku2(grid) {
    for(let i in grid){
        let row = new Set();
        let col = new Set();
        let x = 0;
        for(let j in grid[i]){
            let arr = [];
            let x = 0;
            if(grid[i][j] != '.'){
                if(row.has(grid[i][j])){
                    return false;
                } else {
                    row.add(grid[i][j]);
                }
            }
            if(grid[j][i] != '.'){
                if(col.has(grid[j][i])){
                    return false;
                } else {
                    col.add(grid[j][i]);
                }
            }
            for(let k=0; k<3; k++){
                for(let l=0; l<3; l++){
                   if(grid[i][j] != '.'){
                       if(grid[k+(Math.floor(i/3)*3)][l+(Math.floor(j/3)*3)] == grid[i][j]){
                           x++;
                           if(x > 1){
                               return false;
                           }
                       }
                   }     
                }
            }
        }
    }
    
    return true;
}