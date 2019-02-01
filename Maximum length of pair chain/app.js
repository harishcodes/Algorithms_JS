/**
 * @param {number[][]} pairs
 * @return {number}
 */
/*var findLongestChain = function(pairs) {
  
    let arr = [],res
    
    for (let i=0;i<pairs.length;i++){
        
        if (arr.includes(pairs[i][0])){
            pairs[i].splice(i,1)
            continue
        } else {
            arr.push(pairs[i][1])
        }        
    }
    
    
    console.log(pairs,arr)
};*/



/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  
/*    let arr = [],res,newArr=[],temparr=[],temparr1=[]
    for (let i=0;i<pairs.length;i++){
        arr = arr.concat(pairs[i])
    }
    console.log(arr)
    arr.sort()
    
    console.log(arr)
    var i =0
    while (i<arr.length) {
        console.log(i)
        if (arr[i] === arr[i-1]){
            arr.splice(i,2)
            console.log('f',arr,i)
            continue
        } 
        i++
    }
    
   


    console.log(arr)
    
    if (arr.length % 2 !== 0){
        res = arr.length - 1
    } else {
        res = arr.length
    }
    
    console.log(res/2)
    return res/2
    
    */
        var arr = pairs.sort((a,b) => a[1]-b[1])
        
        
        var compareVal = pairs[0][1], count=1
        
        for (let i=1;i<pairs.length;i++){
            if (compareVal < pairs[i][0]){
                compareVal = pairs[i][1]
                count++
            }
        }
        
    
        return count
};


//findLongestChain([[2,3], [3,4], [1,2],[4,5],[7,8],[10,11]])
/*
findLongestChain([
    [-10,-8],
    [8,9],
    [-5,0],
    [6,10],
    [-6,-4],
    [1,7],
    [9,10],
    [-4,7]
])*/
findLongestChain(
[[-6,9],[1,6],[8,10],[-1,4],[-6,-2],[-9,8],[-5,3],[0,3]])

//findLongestChain([[9,10],[-4,9],[-5,6],[-5,9],[8,9]])