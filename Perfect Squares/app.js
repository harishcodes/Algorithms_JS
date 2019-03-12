/**
 * @param {number} n
 * @return {number}
 
 Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 */
var numSquares = function(n) {
  

    var dp = new Array(n).fill(Infinity)
    dp[0] = 0
    for (var i=1;i<=n;i++){
        
        var j=1
        while(i-(j*j) >= 0){
            dp[i] = Math.min(dp[i],dp[i-(j*j)]+1)
            j++
        }
        console.log(dp)        
    }
    return dp[n]
};



var numSquaresBFS = function(n){
    
    var queue =[],cnt=0
    if (n<=0) return 0
    
    for (var i=1;i*i<=n;i++) {
        if ((i*i) === n) return 1
        queue.push(i*i);
    }
    
    console.log(queue)
    
    
    while(queue.length > 0){
        cnt++
        var curr = queue[0]
        
        for (var i=1;i*i<=n-curr;i++){
            if (curr+i*i === n){
                return cnt
            } elseif (curr + i*i > n ){
                break;
            }
        }
        
    }
    
    
    
}







//console.log(numSquares(12))
//numSquaresBFS(12)

