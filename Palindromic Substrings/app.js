
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  
     var count1=0
    function count(left,right){
    while(left>-1&&right<s.length&&s[left]==s[right]){
    count1++
    left--
    right++
    }
    }

    for(var i=0;i<s.length;i++){
        count(i,i);
        count(i,i+1)
    }
    return count1
    
};