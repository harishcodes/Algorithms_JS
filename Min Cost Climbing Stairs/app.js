/**
 * @param {number[]} cost
 * @return {number}
 
 Question :
 ----------
 
 On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
Note:
cost will have a length in the range [2, 1000].
Every cost[i] will be an integer in the range [0, 999].
 
 */
var minCostClimbingStairs = function(cost) {
    var arr=[]
    return helper(cost,0,arr)
    
};

function helper(cost,i,arr){
    
    if (i<cost.length){
        return cost[i]
    }
    
    if (i===cost.length){
        return
    }
    
    var res=0
    res = cost[i]+Math.min(helper(cost,i+1,arr),helper(cost,i+2,arr))
    arr.push(res)
    console.log('arr',arr)
    return arr
}


var minCostClimbingStairsdp = function(cost) {
  
    var dp=[]
    var n=cost.length
    dp[0]=cost[0]
    dp[1] = cost[1]
    for (var i=2;i<cost.length;i++){
        dp[i] = cost[i]+ Math.min(dp[i-1],dp[i-2])
    }
    
    return Math.min(dp[n-2],dp[n-1])
    
};

console.log(minCostClimbingStairsdp([10,15,20]))