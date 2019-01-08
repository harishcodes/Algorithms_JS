/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
    var valid = true
    var boxArr1=[]
    var rowArr=[]
    var colArr=[]
    var boxArr1Cnt=0
    var boxArr2=[]
    var boxArr2Cnt=0
    var boxArr3=[]
    var boxArr3Cnt=0
    for (i=0;i<9;i++){
        rowArr=[]
        for (j=0;j<9;j++){
            if (rowArr.indexOf(board[i][j]) >= 0){
                console.log('RETURN FALSE', rowArr)
                return false
            }
            
            if (board[i][j] !== '.'){
                rowArr.push(board[i][j])                    
            }

            var boundVal = j+1
            if (boxArr1Cnt === 9){
                console.log('boxArr 1 :', boxArr1)
                console.log('Unique boxArray1 : ', checkIfArrayIsUnique(boxArr1))
                if (!(checkIfArrayIsUnique(boxArr1))) {
                    return false
                }
                boxArr1=[]
                boxArr1Cnt=0
            }
            if (boxArr2Cnt === 9){
                console.log('boxArr 2 :', boxArr2)
                console.log('Unique boxArray2 : ', checkIfArrayIsUnique(boxArr2))
                if (!(checkIfArrayIsUnique(boxArr2))){
                    return false
                }
                boxArr2=[]
                boxArr2Cnt=0
            }
            if (boxArr3Cnt === 9){
                console.log('boxArr 3 :', boxArr3)
                console.log('Unique boxArray3 : ', checkIfArrayIsUnique(boxArr3))
                if (!(checkIfArrayIsUnique(boxArr3))){
                    return false
                }
                boxArr3=[]
                boxArr3Cnt=0
            }            
            if (boundVal<=3){
                boxArr1Cnt++
                if (board[i][j] !== '.'){
                    boxArr1.push(board[i][j])
                }                
            } else if ((boundVal > 3) && (boundVal<=6)) {
                boxArr2Cnt++
                if (board[i][j] !== '.'){
                    boxArr2.push(board[i][j])
                }                
            } else if ((boundVal > 6) && (boundVal<=9)) {
                boxArr3Cnt++
                if (board[i][j] !== '.'){
                    boxArr3.push(board[i][j])
                }                
            }
        }
    }
};


function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}


isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])