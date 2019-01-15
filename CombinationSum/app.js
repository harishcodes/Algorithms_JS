var combinationSum = function(candidates, target) {
    const list = []
    backtrack(candidates.sort((a, b) => a - b), 0, target, [], list)
    return list
};

function backtrack(candidates, index, target, subset, list) {
    if (target === 0) {
        return list.push(subset.slice())
    }
    if (target < 0) {
        return
    }
    for(var i=index;i<candidates.length;i++){    
        backtrack(candidates,i, target - candidates[i], subset.concat(candidates[i]), list)
    }
}