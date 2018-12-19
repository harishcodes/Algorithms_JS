/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var strStr = function(haystack, needle) {

    
  return (haystack.includes(needle)) ? haystack.indexOf(needle) : -1; 
    
};

console.log(strStr("mississippi","issip"));