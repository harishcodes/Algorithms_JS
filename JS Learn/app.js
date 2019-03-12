/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  
    list =[]
    console.log(candidates.sort((a,b) => a - b))
    backtrack(candidates.sort((a,b) => a - b),0, target,[],list)
    console.log(list)
    return list
};

backtrack = (candidates,index,target,subset,list) => {
    console.log('sub',subset)
    if (target === 0){
        //console.log('first return', target)
        console.log('sub RETURNING',subset)
        return list.push(subset.slice())        
    }
    //console.log('after first return ', target)
    if (target < 0){
        return
    }
    //console.log('after first return 2', target)
    
    for (var i=index;i<candidates.length;i++){
        //console.log('here', i, target, subset)
        if (i!== index && candidates[i] === candidates[i-1])
            continue
        backtrack(candidates,i+1,(target-candidates[i]),subset.concat(candidates[i]),list)
    }
    
}

//combinationSum2([10,1,2,7,6,1,5],8)


/**
 * @param {string} s
 * @return {string}
 
 Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 
 */
var longestPalindrome = function(s) {
    var substr=[],res=[]
    return helper(s,0,1,0,res)        
    
};

function helper(s,start,end,max,res){
    
    var substrstring = s.substring(start,end)
    console.log(substrstring,start,end)
    if (substrstring === substrstring.split('').reverse().join('')){  
        if (substrstring.length > 1) {
            console.log('palin SETTING',substrstring,res,max)            
            res.push(substrstring)
            console.log('palin AFTER SETTING',substrstring,res,max)              
        }

    }
    
    if (start === s.length & end === s.length) {
        return
    }
        
    
    if (end === s.length+1) {
        helper(s,start+1,start+1,max,res)
    } else {
        helper(s,start,end+1,max,res)
    }
    
    console.log('palin',substrstring,res)
    return res[0]
}


console.log(longestPalindrome('babad'))




function test(){
    var var1 = 'harish'
    var obj = {
        
    }
    
    obj.sample=[var1]
    
    obj.sample1 = obj.sample.push('ram').map((val) => {return val})
    
    console.log(obj)
}

test()