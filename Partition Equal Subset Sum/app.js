/**
 * @param {number[]} nums
 * @return {boolean}
 
 Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.
Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
 
 */
var canPartition1 = function(nums) {
  
    var total = nums.reduce(sumArray)/2
    var sum =0,bool=false
    console.log(total)    
    nums = nums.sort((a,b)=> a-b)
    bool = helper(nums,total,0)
    
    console.log(bool)
    return bool
    
};



function helper1(nums,sum,i){
    
    console.log('i',i,nums[i],sum)
    if (sum === nums[i]) return true
    if (sum < nums[i] || i>= nums.length) return false
    
    var val1 = helper(nums,sum-nums[i],i+1)
    var val2 = helper(nums,sum,i+1)
    return (val1 || val2)    
}


var canPartition = function(nums) {
  
    var total = nums.reduce(sumArray)/2
    var sum =0,bool=false,boolarr=new Array(nums.length).fill(false)
    console.log(total,boolarr)    
    nums = nums.sort((a,b)=> a-b)
    bool = helper(nums,total,0,boolarr)
    
    console.log(bool)
    return bool
    
};



function helper(nums,sum,ind,boolarr){
    
    console.log('i',ind,nums[ind],sum)
    if (sum === nums[ind]) return true
    if (sum < nums[ind] || i>= nums.length) return false
    
    for(var i=ind;i<nums.length;i++){
        console.log('i in loo', i)
        if (boolarr[i] === false) {
            console.log('i in loo inside for', i)
            boolarr[i] = true
            if (helper(nums,sum-nums[i],i+1,boolarr)){
                return true
            }
            console.log('i out of recur', i)
            boolarr[i] = false
        }
    }
    return false
      
}







var sumArray = (target,num) => {
    return target+num
}


canPartition([1,2,3,5])
