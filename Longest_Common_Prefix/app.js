/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var shortestStrLength = "";
    if (strs.length > 0){
        shortestStrLength = strs.reduce((prevVal,currentVal) => {

            if (currentVal.length < prevVal.length) {            
                return currentVal;
            } else {
                return prevVal;
            }
        });        
    }

    
    var commonPrefixLength = shortestStrLength.length;
    
    var j = commonPrefixLength;
    var prefixFound = true;
    while( j > 0){
        var prevValInArr = strs[0].substr(0,j);
        prefixFound = true;
        for (i=1;i<strs.length;i++){
            if (prevValInArr !== strs[i].substr(0,j)) {
                prefixFound = false;
                break;
            }
            prevValInArr = strs[i].substr(0,j);
        }
        
        if (prefixFound){
            break;
        }
        
        j -= 1;        

    }
    
    if (prefixFound){
        return shortestStrLength.substr(0,j);
    } else {
        return ""
    }
    
};

console.log(longestCommonPrefix(["aa","aa"]));