/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {

    if (nums.length === 1) return true
    var max = helper(nums,0,nums.length-1)
    console.log(max)
    if (max >= 0) return true
    return false

};


function helper(nums,st,end) {
    
    if (st===end) {
        return nums[end]
    }
    
    var val1 = Math.max((nums[st]-helper(nums,st+1,end)),(nums[end]-helper(nums,st,end-1)))
    return val1
    
}



//PredictTheWinner([1,1])


/**
 * @param {number[]} piles
 * @return {boolean}
 */

var stoneGame = function(nums) {

    if (nums.length === 1) return true
    var memo = new Array(nums.length).fill().map(()=> new Array(nums.length).fill(-1))    
    console.log(memo)
    var max = helper(nums,0,nums.length-1,memo)
    console.log(max)
    if (max >= 0) return true
    return false

};


function helper(nums,st,end,memo) {
    
    if (st===end) {
        return nums[end]
    }
    
    if (memo[st][end] !== -1){
        return memo[st][end]
    }
    
    memo[st][end] = Math.max((nums[st]-helper(nums,st+1,end,memo)),(nums[end]-helper(nums,st,end-1,memo)))
    return memo[st][end]
    
}

stoneGame([1,2,3])