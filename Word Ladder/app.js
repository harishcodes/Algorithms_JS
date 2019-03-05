/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  
    
    let queue=[],visited= new Set(),len=0,wordListMod=new Set(wordList)
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    visited.add(beginWord)
    queue.push(beginWord)
    
    if (!(wordListMod.has(endWord))) return 0
    
    
    while ((queue.length > 0)) {
        
        var size = queue.length
        console.log(queue)
        for (var j = 0; j < size; j++) {
            
            var s = queue.shift()
            
            if (s === endWord){
                return len+1
            }
            
            
            for (var i=0;i<s.length;i++){                
                
                for (let d = 0; d < alphabets.length; d++) {
                
                    var newStr = s.substr(0,i) + alphabets[d] + s.substr(i+1)


                    if ((wordListMod.has(newStr)) && !(visited.has(newStr))){
                        queue.push(newStr)      
                        visited.add(newStr)
                    }                                
                      
                }
            }
            
        }
        
        len++
    }
    
    return 0
};
                 


ladderLength("hit",
"cog",
["hot","dot","dog","lot","log","cog"])