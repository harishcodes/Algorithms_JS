/**
 * @param {string} s
 * @return {string}
 
 Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */
/*var decodeString = function(s) {
    let strVal = dfs(s,0)
    console.log(strVal)
};

function dfs(s, start) {
    let str='',number=''
    
    for (let i=start; i<s.length;i++){        
        if (s.charAt(i) === '[') {
           // var tempStr =''
            let [tempStr,next] = dfs(s,i+1)
            str += new Array(parseInt(number)).fill(tempStr).join('');
            console.log('str', str, i, next)
            number=''
            i=next
        } else if (s.charAt(i) === ']') {
            return [str, i]       
        } else if (!isNaN(s.charAt(i))) {                        
            number += s.charAt(i)            
            console.log('num', number, i)
        } else {            
            str += s.charAt(i)           
            console.log('char', str, i)
        }                
    }
    
    return str
}*/




/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var queue = s.split(''); // string to array
    var string = '';
    
    while (queue.length > 0)
        string = recursiveDecode(queue);
    console.log(string)
    return string;
}

/**
 * @param {string[]} queue
 * @return {string, string[]}
 */
function recursiveDecode(queue) {
    var string = '';
    var number = '';
    
    while (queue.length > 0) {
        var current = queue.shift();
        
        if (current == '[') {
            var tempString = '';
            
            // recursively decode nested string
            tempString = recursiveDecode(queue);
            
            // number * decoded nested string
            string += new Array(parseInt(number)).fill(tempString).join('');
            
            // reset number
            number = '';
        } 
				
        // accumulate number characters
        else if (current.match(/[0-9]/i)) number += current;
				
        // accumulate string characters
        else if (current.match(/[a-z]/i)) string += current;
				
        // end of nested string
        else if (current == ']') break;
    }
    
    // return decoded string & updated queue
    return string;
}

decodeString("2[abc]3[cd]ef")