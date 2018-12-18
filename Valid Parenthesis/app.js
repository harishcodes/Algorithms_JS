/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
    var obj = {
        
        '(' : 1,
        ')':1,
        '{':2,
        '}':2,
        '[':3,
        ']':3
    }
    var boolFlag = false;    
    var arr = s.split('');
    var temp = arr[0];
    var i = 0;
    
    if (arr.length === 0){
        return true;
    }
    
    while (i < arr.length){
        
        if(arr[i] !== temp){
            console.log('arr '+ arr);
            console.log('temp '+ temp);
            console.log('arr[i] '+ arr[i]);
            if (obj[temp] === obj[arr[i]]) {
                arr.splice(i-1,2);
                i =0;
            }
            temp = arr[i];
            i++;
        } else {
            i++;
            continue;
        }        
        
        
    }

    if (arr.length === 0){
        console.log('here' + s.length)
        boolFlag = true;
    }

    return boolFlag;
   
    
};


console.log(isValid('({[]})'));
console.log(isValid('(]})'));
console.log(isValid(' '));
    //(( [ { ] )