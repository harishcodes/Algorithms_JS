/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  
    let arr= new Array(m)
    arr.fill(1,0,m)
    
    for (let i=1;i<n;i++){
        for (let j=1;j<m;j++){
            arr[j] += arr[j-1]
        }
    }
    
    console.log(arr[m-1], arr)
    return arr[m-1]
    
};

uniquePaths(7,3)