/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  
    let rowCnt = 0, rowEnd = matrix.length -1, colCnt = 0, colEnd = matrix[0][0].length - 1, result=[]
    let goingRight = true, goingDown = false, goingLeft = false, goingUp = false, allDone=false, goingIn=false
    console.log(colEnd)
    while (!(allDone)) {
        
        result.push(matrix[rowCnt][colCnt])
        
        if (goingRight){
            
            if (colCnt === colEnd){
                goingRight = false
                goingDown = true
            } else {
                colCnt ++                            
            }                                    
        } 
        
        if (goingDown) {
            
            if (rowCnt === rowEnd){
                goingDown=false
                goingLeft = true
            } else {
                rowCnt++
            }            
        } 
        
        if (goingLeft) {
            
            if (colCnt === 0){
                goingLeft=false
                goingUp = true
            } else {
                colCnt--
            }            
        }
        
        if (goingUp) {
            
            if (rowCnt === 1){
                goingUp = false
                goingIn=true
            } else {
                rowCnt--
            }            
        } 
        
        if (goingIn) {
            
            if (colCnt === (colEnd -1)){
                goingIn = false
                allDone=true
            } else {
                colCnt++
            }            
        }
                
        
    }
    
    console.log(result)
    return result
};

spiralOrder([
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
])