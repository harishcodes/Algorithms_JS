/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // bottom-up
    let n = triangle.length;
    let dp = triangle[n-1];
    for(let i=n-2; i>-1; i--){
        for(let j=0; j<triangle[i].length; j++){
            dp[j] = Math.min(dp[j], dp[j+1]) + triangle[i][j];
        }
            console.log(dp)
    }

    return dp[0];
};

minimumTotal(
[   [-1],
   [2,3],
 [1,-1,-3]
]
)