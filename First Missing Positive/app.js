/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    nums.sort((a,b) => {
        return a - b
    })
    console.log(nums)
    
    var result
    var i=0
    while (i < nums.length){
        if (nums[i] <= 0) {
            nums.splice(i,1)
            continue
        }
        console.log(nums)
        console.log(nums[i+1]-nums[i])
        
        if (nums[i+1]-nums[i] > 1){
            nums.splice((i+1),(nums.length - (i+1)))
            break
        }
        i++
    }
    console.log('hey',nums)
    
    if (nums[0]-1 === 0){
        result = nums[nums.length -1] + 1
    } else {
        result = 1
    }
    console.log(result)
    return result
    
};

firstMissingPositive([3,4,-1,1])
//firstMissingPositive([7,8,9,12,13])
//firstMissingPositive([0,1,2])