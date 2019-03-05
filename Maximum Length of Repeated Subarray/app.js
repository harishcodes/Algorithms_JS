/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 
 Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
Note:
1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
 
 */
var findLength = function(A, B) {
    
    var dp = [...Array(A.length)].map(e=> Array(B.length))
    
    for (var i=0;i<A.length;i++){
        for (var j=0;j<B.length;j++){
            dp[i][j] = 0
        }
    }    
    
    var maxLen=0
    for (var i=0;i<A.length;i++){
        for (var j=0;j<B.length;j++){
            if (A[i] === B[j]) {
                if (i===0 || j=== 0){
                    dp[i][j] = 1
                } else {
                    dp[i][j] = 1 + dp[i-1][j-1]
                }                   
                    maxLen = Math.max(maxLen,dp[i][j])
            } else {
                dp[i][j] = 0
            }
        }
    }
        
    return maxLen === Number.MIN_SAFE_INTEGER ? 0 : maxLen    
};


console.log(findLength([1,2,3,2,1],
[3,2,1,4,7]))