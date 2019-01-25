/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  
    
    let m = obstacleGrid[0].length, n= obstacleGrid.length    
    
    let arr= new Array(m), foundObstacle = false
        
    
    for (let i=0;i<m;i++){
        
        if (foundObstacle){
            arr[i] = 0
        } else {
            if (obstacleGrid[0][i] === 1) {
                arr[i] = 0
                foundObstacle = true
            } else {
                arr[i] = 1
            }            
        }        
    }
    

    console.log(arr,m,n)
    if (m===1 && n===1){
        if (obstacleGrid[0][0] === 1){
            return 0
        } else {
            return 1            
        }

    }    
    
    
    if (m === 1){
        if (obstacleGrid[1][0] === 1){
            return 0
        }
    }

    
    for (let i=1;i<n;i++){
        for (let j=1;j<m;j++){
            if (obstacleGrid[i][j] !== 1){
                if (obstacleGrid[i][j-1] === 1){
                    arr[j-1] =0
                }
                arr[j] += arr[j-1]
            } else {
                arr[j] = 0
            }
        }
    }

    
    console.log(arr[m-1], arr)
    return arr[m-1]
    
};

uniquePathsWithObstacles([[0,0],[1,0]])