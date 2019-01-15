/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  
    list =[]
    backtrack(candidates.sort((a,b) => a - b),0, target,[],list)
    
    return list
};

backtrack = (candidates,index,target,subset,list) => {
    
    if (target === 0){
        //console.log('first return', target)
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