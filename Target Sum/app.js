/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer. 
 
 */
var findTargetSumWays = function(nums, S) {
    
    return helper(nums,S,0,0,"")
};


function helper(nums,S,i,sum,call){
    
    console.log(i,'th time',call)
    if(i===nums.length){        
        if (sum === S){
            console.log(i,'th iter done return 1')
            return 1
        } else {
            console.log(i,'th iter done return 0')            
            return 0
        }        
    }
    
    var curVal = nums[i] 
    var plus = helper(nums,S,i+1,sum+curVal,'plus')
    var minus = helper(nums,S,i+1,sum-curVal,'minus')
    console.log('returning :', plus, minus)
    return plus + minus
    
}


console.log(findTargetSumWays([1, 1, 1],1))