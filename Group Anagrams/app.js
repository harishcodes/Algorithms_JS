/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
    var grpObj = {}
    var result=[]
    
    for (let i=0;i<strs.length;i++){
        
        let key = strs[i].split('').sort().join('')
        
        if (key in grpObj){
            grpObj[key].push(strs[i])
        } else {
            console.log(key)
            grpObj[key] =[strs[i]]            
        }
                
    }
    
    for (var prop in grpObj){
        if (grpObj.hasOwnProperty(prop)){
            result.push(grpObj[prop])
        }
    }
    
    return result
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])