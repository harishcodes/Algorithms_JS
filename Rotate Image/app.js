/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    //console.log(matrix)
    var temp=[]
    var temp1=[]
    for (var i=0;i<matrix.length;i++){
        //temp[i]=[]
        for (var j=0;j<i;j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];        
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        
        matrix[i].reverse()
      
    }
        
    
    
    console.log(matrix,temp,temp1)
    
};


rotate([[1,2,3],[4,5,6],[7,8,9]])