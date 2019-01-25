/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
  let currentMax = nums[0];
  let max = nums[0];
    
    for (let i=1;i<nums.length;i++){
        currentMax = Math.max(currentMax+nums[i],nums[i])
        max=Math.max(currentMax,max)
    }
    
    console.log(max)
    return max
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])