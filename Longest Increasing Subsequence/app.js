/**
 * @param {number[]} nums
 * @return {number}
 
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity? 
 
 
 */
var lengthOfLIS = function(nums) {
    
    
    return helper(nums,1,0)
    
};

function helper(nums,i,j){
    
    if (j > nums.length ){
        console.log('here')
        return 0
    }
        
    var res=0    
    if ((i<0) || (nums[j] >= nums[i])){
        console.log('2-inside if loop','i:',i,'j:',j,'nums[i]:',nums[i],'nums[j]:',nums[j],'res:',res)
        res = 1 + helper(nums,j,j+1)
    } 
    console.log('1-','i:',i,'j:',j,'nums[i]:',nums[i],'nums[j]:',nums[j],'res:',res)
    res = Math.max(res,helper(nums,i,j+1))
    
    return res
    
    
}

//console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(lengthOfLIS([1,3,2]))





///***************** DYNAMIC PROGRAMMING *******************


var lengthOfLISDP = function(nums) {
    
    
    var dp=new Array(nums.length).fill(1)
    
    if (nums.length === 0) return 0
    
    for (var i=1;i<nums.length;i++){
        for (var j=0;j<i;j++){
            if (nums[i]>nums[j]){
                if (dp[j]+1 > dp[i]){
                    dp[i]=dp[j]+1
                }
            }            
        }
    }
    console.log(Math.max(...dp),dp)
};

//lengthOfLISDP([1,3,6,7,9,4,10,5,6])