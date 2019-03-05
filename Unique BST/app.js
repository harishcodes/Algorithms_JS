/**
 * @param {number} n
 * @return {number}
 
 
 Question :
 -----------
 
 Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 */
var numTrees = function(n) {
    
    var dp=new Array(n)
    dp[0] = 1
    dp[1] =1
    for (var i=2;i<=n;i++){ 
        var sum=0
        for (var j=1;j<=i;j++){
            sum = sum +( dp[j-1] * dp[i-j])
        }
        dp[i] = sum
    }
    
    return dp[n]
    
};

console.log(numTrees(5))