/**
 * @param {number[]} nums
 * @return {number}
 
 
 Given an array nums of integers, you can perform operations on the array.

In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.

You start with 0 points. Return the maximum number of points you can earn by applying such operations.

Example 1:

Input: nums = [3, 4, 2]
Output: 6
Explanation: 
Delete 4 to earn 4 points, consequently 3 is also deleted.
Then, delete 2 to earn 2 points. 6 total points are earned.
 

Example 2:

Input: nums = [2, 2, 3, 3, 3, 4]
Output: 9
Explanation: 
Delete 3 to earn 3 points, deleting both 2's and the 4.
Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
9 total points are earned.
 

Note:

The length of nums is at most 20000.
Each element nums[i] is an integer in the range [1, 10000].
 
 */
var deleteAndEarn = function(nums) {
    var dp=new Array(10000).fill(-1)
    var arr= new Array(10000).fill(0)
    nums = nums.sort((a,b) => a-b)
    
    for (var i=0;i<nums.length;i++){
        arr[nums[i]] += nums[i]
    }
    //console.log(arr)
    var res = helper(arr,0,dp)
    //var res = helper(nums.slice(),origArr,nums.length,0,0)
    
    console.log('res',res)
};


function helper(arr,i,dp){
    
    if (i === arr.length-1 || i=== arr.length-2){
        return 0
    }
    

    if (dp[i]!== -1){
        return dp[i]
    }
    
    var val1 = helper(arr,i+2,dp) + arr[i]
    var val2 = helper(arr,i+1,dp)
    
    dp[i] = Math.max(val1,val2)
    return dp[i]
        

}







var deleteAndEarndp = function(nums) {
    
    //var arr= new Array(10000).fill(0)
    var maxVal = Math.max(...nums)
    var arr = new Array(maxVal+1).fill(0)
    nums = nums.sort((a,b) => a-b)
    
    for (var i=0;i<nums.length;i++){
        arr[nums[i]] += nums[i]
    }
    console.log(arr)
    var dp=[]
    
    dp[0] = arr[0]
    dp[1] = arr[1]
    
    for(var j=2;j<arr.length;j++) {
        var val1 = dp[j-2]+arr[j]
        var val2 = dp[j-1]
        dp[j] = Math.max(val1,val2)
    }
    console.log(dp[maxVal])
    return dp[maxVal]
}



//deleteAndEarndp([2, 2, 3, 3, 3, 4])

deleteAndEarndp([3, 4, 2])

