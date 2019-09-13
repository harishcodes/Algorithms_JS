/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    var maxVal = nums[0]
    
    if (nums.length === 1){
        return true
    }
    
    
    
    for (var i=0;i < nums.length-1;i++){
        
        maxVal = Math.max(maxVal, i+nums[i])
        console.log('max:',maxVal)
        
        if (maxVal >= nums.length-1){
            console.log('true')
            return true
        }
        
        if (maxVal <= i){
            if (nums[i] === 0) {
                    console.log('false11')
                return false
            }                    
        }

    }
    console.log('false')
    return false
};

//canJump([3,0,8,2,0,0,1])

function permutate(s) {
    let res=[]
    helper(s.split(''),[],res)
    console.log(res)
}

function helper(arr,memo,res) {
    
    if (arr.length === 0) {
        res.push(memo)
    } else {
        for (let i=0;i<arr.length;i++) {
            let curr = arr.slice()
            let next = curr.splice(i,1)
            helper(curr.slice(),memo.concat(next),res)
        }
    }
    return res
}

//permutate('abc')



function letterCombinations(digits) {
    
   const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let res = []
    helper(digits.split(''),res,[])
    console.log('res',res)
    
}


function helper(arr,res,memo) {
   const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };    
    if (arr.length === 0){
        res.push(memo.join(''))
    } else {
        let letters = map[arr[0]]
        let curr = arr.slice()
        let nextDigits = curr.splice(0,1)
        for (const letter of letters) {
            helper(curr.slice(),res,memo.concat(letter))
        }
    }
    
    return res
    
    
}

//letterCombinations('23')


var isValidSudoku = function(board) {
  // create an empty set for each row/col/square
  const rowRules = new Array(9).fill().map(() => new Set())
  const colRules = new Array(9).fill().map(() => new Set())
  const mixedRules = new Array(9).fill().map(() => new Set())
  
  // iterate through each cell on the board
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const curr = board[row][col]
      
      // some tricky math to get the index of the 3x3 squares
      const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)

      if (curr === ".") continue  // ignore dots
      
      // if the current number already exists in the set, board is invalid
      const a = rowRules[row].has(curr)
      const b = colRules[col].has(curr)
      const c = mixedRules[mixedIdx].has(curr)
      if (a || b || c) return false
      
      // add the number to the appropriate set
      rowRules[row].add(curr)
      colRules[col].add(curr)
      mixedRules[mixedIdx].add(curr)
        console.log('rowro', mixedRules)
    }
  }
  
  // all checks out
  return true
};

//isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp=new Array(nums.length).fill(0)
    let max=Number.MIN_SAFE_INTEGER
    if (nums.length === 1) {
        return nums[0]
    }
    for (let i=0;i<nums.length;i++){
        dp[i] = nums[i]
        for (let j=i+1;j<nums.length;j++) {
            dp[j] = dp[j-1] + nums[j]
            if (dp[j] > max){
                max = dp[j]
            }
        }

        if (nums[i] > max){
            max = nums[i]
        }
                console.log(nums[i],max)
        dp = new Array(nums.length).fill(0)
    }
    
    return max
};

//maxSubArray([-2,-1])
//maxSubArray([-2,1,-3,4,-1,2,1,-5,4])


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    let trackArr = new Array(image.length).fill().map(()=> new Array(image[0].length).fill(-1))
    looper(image,sr,sc,image[sr][sc],newColor,trackArr)
    console.log(trackArr)
    console.log(image)
};


function looper(arr,i,j,samecolor,modcolor,trackArray) {
    if (i<0 || j<0 || i>= arr[0].length || j>= arr.length ) {
        return    
    }
    if(arr[i][j] !== samecolor) return
    
    if (trackArray[i][j] === 0) return
        
    trackArray[i][j] = 0
    arr[i][j] = modcolor
    
    looper(arr,i+1,j,samecolor,modcolor,trackArray)
    looper(arr,i-1,j,samecolor,modcolor,trackArray)
    looper(arr,i,j+1,samecolor,modcolor,trackArray)
    looper(arr,i,j-1,samecolor,modcolor,trackArray)
    
}

floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2)

