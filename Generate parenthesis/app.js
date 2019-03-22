/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result =[];
    var s =""
    generateValidParanthesis(n,n,result,s);
    console.log(result);
};

var generateValidParanthesis = function(open,close,result,s){

        console.log("open :" + open);
    console.log("close :" + close);
    console.log("s :"+ s);
    if (open === 0 && close === 0) {
        console.log('final :' + result);
        return result.push(s);
    }
    
    if (open === close){
        generateValidParanthesis(open-1,close,result,s+'(');
    } else if (open === 0){
        generateValidParanthesis(open,close-1,result,s+')');
    } else {
        generateValidParanthesis(open-1,close,result,s+'(');
        generateValidParanthesis(open,close-1,result,s+')');
    }
    
        
}

//generateParenthesis(3);



var generateParenthesis1 = function(n) {
    var result =[];
    var s =""
    generateValidParanthesis1(n,n,result,s);
    console.log(result);
};

var generateValidParanthesis1 = function(open,close,result,s){

        console.log("open :" + open);
    console.log("close :" + close);
    console.log("s :"+ s);
    if (open === 0 && close === 0) {
        console.log('final :' + result);
        return result.push(s);
    }

    if (open > close) {
        return
    }
    
    if (open > 0){
        generateValidParanthesis1(open-1,close,result,s+'(');
    }
    
    if (close > 0) {
        generateValidParanthesis1(open,close-1,result,s+')');        
    }
            
}

generateParenthesis1(3)