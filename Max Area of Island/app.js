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
var maxAreaOfIsland = function(grid) {
    let max=0
    
    if (grid == null || grid.length == 0) {
            return 0;
    }
    
    
    for (let i=0; i< grid.length; i++){
        for (let j=0; j< grid[0].length; j++){
            if (grid[i][j] === 1){
                area = DFSmethod(grid,i,j,0)
                max = Math.max(max,area)                
            }            
        }        
    }
    
    console.log(max)
    return max
};

function DFSmethod(grid,i,j,islandArea) {
        if ((i >= grid.length) || (j>=grid[0].length) || (i<0) || (j<0) || grid[i][j] === 0) return islandArea
        grid[i][j] = 0
        islandArea++
        islandArea = DFSmethod(grid,i+1,j,islandArea)
        islandArea = DFSmethod(grid,i-1,j,islandArea)
        islandArea = DFSmethod(grid,i,j+1,islandArea)
        islandArea = DFSmethod(grid,i,j-1,islandArea)
        return islandArea
}



maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]])