/**
 * @param {character[][]} grid
 
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3 
 
 * @return {number}
 */
var numIslands = function(grid) {
    var arr = [...new Array(grid.length)].map(()=> new Array(grid[0].length).fill(-1))
    console.log(arr)
    console.log(grid)    
    let count = 0
    
    const DFSmethod = (i,j) => {
        if ((i >= grid.length) || (j>=grid[0].length) || (i<0) || (j<0) || grid[i][j] === '0') return
        grid[i][j] = '0'
        DFSmethod(i+1,j)
        DFSmethod(i-1,j)
        DFSmethod(i,j+1)
        DFSmethod(i,j-1)
    }    
    
    
    for (let i=0; i< grid.length; i++){
        for (let j=0; j< grid[0].length; j++){
            if (grid[i][j] === '1'){
                DFSmethod(i,j)
                count++
            }            
        }        
    }
    
    console.log(count)
    return count
};




numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])