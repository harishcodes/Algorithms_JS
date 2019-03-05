/**
 * @param {number[]} nums
 * @return {number}
 
 Question :
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
 
 */
var rob = function(nums) {
    
    var dp=new Array(nums.length).fill(-1)
    console.log(dp)
    return helper(nums,0,dp)
};


function helper(nums,i,dp){
    
    if (i===nums.length-1 || i=== nums.length-2 ) {
      return nums[i]  
    } 
    console.log(dp,i)
    if (dp[i] !== -1){
        return dp[i]
    }
    
    var val1 = helper(nums,i+2,dp) + nums[i]
    var val2 = helper(nums,i+1,dp)

    dp[i] = Math.max(val1,val2)
    return dp[i]
}


console.log(rob([2,1,1,2]))


var robdp = function(nums) {
    
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    var dp=[],val
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    
    if (nums.length === 2) return Math.max(...nums)
    
    for (var i=2;i<nums.length;i++){
        val = nums[i]
        dp[i] = Math.max(dp[i-2]+val,dp[i-1])
    }
    console.log(dp[nums.length-1])
    return dp[nums.length-1]
};

function robdp1(nums) {
    if (nums.length == 0) return 0;
    var memo = new Array(nums.length+1)
    memo[0] = 0;
    memo[1] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var val = nums[i];
        memo[i+1] = Math.max(memo[i], memo[i-1] + val);
    }
    console.log(memo[nums.length])
    return memo[nums.length];
}



robdp1([2,1,1,2])