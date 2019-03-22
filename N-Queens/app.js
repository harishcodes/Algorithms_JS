/**
 * @param {number} n
 The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    var board = new Array(n).fill().map(()=> new Array(n).fill('.'))
    var res=[]
    helper(0,board,res,board.length)  
    console.log(res)
    
}

function helper(row,board,res,n){
    
    if (row === n){
        res.push(construct(board,n))
        return
    }
    
    
    for (var col=0;col<board.length;col++){
        
       
        if (isValid(board,row,col)) {
             board[row][col] = 'Q'
            helper(row+1,board,res,n)
            board[row][col] = '.'
        }
        
        
    }


}


function isValid(board,row,col){
    
    for (var i =0;i<board.length;i++){
        for (var j=0;j<row;j++) {
            
            if ((board[j][i] === 'Q') && ((row+col === i+j) || (row+i === col+j) || (col===i))){
                console.log('hr',row,col,board[i][j],i,j)
                return false
            }
        }
    }
    console.log('hrOUT',board[row][col],row,col)
    return true
}


function construct(board,n){
    var newBoard = []
    var temp =[]
    var str=''
    for (var i=0;i<board.length;i++){
        
        temp.push(JSON.stringify(board[i].join('')))
                
    }
    console.log('TEMPO',temp.join(','))
    newBoard.push(temp.join(','))
    console.log('HERE',newBoard)
    return newBoard
}


solveNQueens(4)

