/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    for (let i = 0; i < len; i++) {
            if (nums[i] != nums[i + 1]) {
                nums.push(nums[i]);
            }
        }

    nums.splice(0,len);
};


removeDuplicates([0,0,0,0,0,1,2,2,3,3,4,4]);