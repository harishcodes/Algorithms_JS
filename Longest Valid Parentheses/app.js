/**
 * @param {string} s
 * @return {number}
 */
/*var longestValidParentheses = function(s) {
    
    var stack=[];
    var finalArr =[];
    var concatBracket='';
    const mapping = {
        '(' : ')'
    }
    s=s.split('')
    var temp =s[0];
    var i=0;
    while(i<s.length){
        if (s[i] !== temp){
            
            if (mapping[temp] == s[i]) {
                s.splice(i-1,2)
                i=0
                concatBracket = concatBracket+ '()'
            } else{
                finalArr.push(concatBracket);
                s.splice(i-1,1)
                i=0                
                concatBracket='';
            }
            temp=s[i];
            i++;
            console.log('if')
        } else {
            i++
            console.log('else')
            //continue
        }
        
        console.log('concat',concatBracket)
                    console.log('temp',temp)
            console.log('s :',s)
            console.log('elseout',finalArr)
    }
    
    //////////////////////////*******************************////////////////////////////////////////
    ////OTHER CODE
  /*  for (var i=0;i<s.length;i++){

        if(s[i] in mapping){            
            stack.push(s[i]);
            console.log('pus',stack)
            concatBracket=concatBracket+s[i];
            console.log('con :',concatBracket);
        } else {
            var check = stack.pop();
            console.log('pop', stack)
            if (mapping[check] != s[i]){
                console.log('here')
                //return false;
                finalArr.push(concatBracket);
                console.log('inside loop' ,finalArr);
                concatBracket=''
                stack=[];
            } else {
                concatBracket=concatBracket+s[i];
                console.log('con :',concatBracket);
            }
        }

    }*/
    
    /*if (stack.length != 0){
        return stack.length + 1
    } else {
        finalArr.push(concatBracket);

        var longest = finalArr.reduce((a,b) => {
            return a.length > b.length ? a:b
        })
        console.log(longest.length);
        console.log(stack.length)
        //if (stack.length != 0) return false;
        //return true;
        console.log(finalArr);
        return longest.length        
    }*/
    
    
    //////////////////////////*******************************////////////////////////////////////////
    /*finalArr.push(concatBracket);
    var longest = finalArr.reduce((a,b) => {
            return a.length > b.length ? a:b
        })
        console.log(longest.length);
        console.log(stack.length)
        //if (stack.length != 0) return false;
        //return true;
        console.log(finalArr);
        return longest.length  

    
};*/




var longestValidParentheses = function (s){
    var braArr =[], counter=0;
    s=s.split('');    
    var lenArr=[];
    for (var i=0;i<s.length;i++){
        if (s[i] === '(') {
            counter=i
            braArr[i] = 'O'
        } else {
            if (typeof braArr[counter] === 'undefined'){
                braArr[i]= 'C'
            } else {
               if (braArr[counter]==='O'){
                   braArr[counter] ='OC'
                   braArr[i]='OC'
               } else {
                   braArr[i]='C'
                   for (k=i;k>=0;k--){
                       if(braArr[k] === 'O'){
                           braArr[i] = 'OC'
                           braArr[k] = 'OC'
                           break;
                       }
                   }
               }
            }

            counter--
        }
    }
    
    var count=0;
    for (var k=0;k<braArr.length;k++){
        
        if (braArr[k] === 'OC'){
            count ++;
        } else {
            lenArr.push(count)
            count=0;
        }
        
    }
    lenArr.push(count);
    
    result = Math.max(...lenArr);
    
    
    console.log(braArr);
      console.log(lenArr);
//    console.log('dif' ,diffArray)
    console.log(result);
    return result;
}


console.log(longestValidParentheses(")()())"))