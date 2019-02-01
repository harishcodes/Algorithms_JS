/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    
    

    let carry=0, needLoop = false
    if (digits[digits.length -1] + 1 === 10){
        digits[digits.length -1] = 0
        carry = 1
        needLoop = true
    } else {
        digits[digits.length -1] = digits[digits.length -1] + 1
    }
    
    if ((digits.length === 1) && (needLoop)){
        digits.unshift(carry)
        return digits
    }
    
    if (needLoop){
        for (let i = digits.length-2; i>=0; i--){
            if (digits[i] + carry > 9){
                digits[i] = 0
            } else {
                if (carry === 1) {
                    digits[i] = digits[i]+carry
                    carry = 0                    
                } 

            } 
        }        
    }

    if (carry !== 0){        
        digits.unshift(carry)
    }
    
    
    
    console.log(digits)
    
};

plusOne(
[9])