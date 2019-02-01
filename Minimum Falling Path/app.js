/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  
    dp = A
    
    for (let i=1;i<A.length;i++){
        for (let j=0;j<A.length;j++){
            var prevRowLeft = dp[i-1][j===0?0:j-1]
            var prevRowAbove = dp[i-1][j]
            var prevRowRight = dp[i-1][j===A.length-1?A.length-1:j+1]
            dp[i][j] += Math.min(prevRowLeft, Math.min(prevRowAbove,prevRowRight))
        }
    }

    console.log(dp[A.length-1])
    
    console.log(Math.min(...dp[A.length-1]))
    
};

minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]])