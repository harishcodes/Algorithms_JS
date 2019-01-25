/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var strArr = s.split('')
    var patArr = p.split('')

    
    var i=0
    while (i<patArr.length){
        
        console.log('after ? :',strArr,i)
        if (patArr[i] === '?') {
            
            if (patArr[i-1] === '*' && patArr[i+1] === '*'){
                patArr.splice(i,1)
                continue
            }
            
            if (typeof strArr[i] !== 'undefined') {
                strArr.splice(i,1,'?')                   
            }
        }
        
        console.log('after ? :',strArr,i)
        
        if (patArr[i] === '*'){            
            
            if (patArr[i+1] === '*'){
                patArr.splice(i+1,1)
                continue
            }
            
            var prevstarElement=''
            var nextstarElement =''
            var strstartInd=-1
            var strendInd=-1            
            
            if (typeof patArr[i-1] !== 'undefined'){
                prevstarElement = patArr[i-1]
            }
            if (typeof patArr[i+1] !== 'undefined'){
                nextstarElement = patArr[i+1]
            }
            
            if (prevstarElement !== ''){
                if (prevstarElement === '?'){
                    strstartInd = i-1
                } else {
                    strstartInd = strArr.indexOf(prevstarElement)                    
                }

            }
            if (nextstarElement !== ''){
                if (nextstarElement === '?'){
                    strendInd = i+1
                } else {
                    strendInd = strArr.lastIndexOf(nextstarElement)                    
                }

            }            
            
            if (strstartInd !== -1 && strendInd !== -1){
                strArr.splice(strstartInd+1, (strendInd - (strstartInd+1)),'*')
            } else if (strstartInd !== -1 && strendInd === -1){
                strArr.splice(strstartInd+1, (strArr.length - (strstartInd+1)),'*')
            } else if (strstartInd === -1 && strendInd !== -1){
                strArr.splice(0, strendInd,'*')
            } else if (strstartInd === -1 && strendInd === -1){
                strArr.splice(0, strArr.length,'*')
            } 
            
            
        }
        
        i++
    }
    
    console.log(strArr,patArr)
    let pattArruniq
    let strArruniq
    if (patArr.includes('*')) {
        pattArruniq = patArr.filter(function(item, pos) {
            return patArr.indexOf(item) == pos;  
        })
    } else {
        pattArruniq = patArr
    }
    
    if (strArr.includes('*')){
        strArruniq = strArr.filter(function(item, pos) {
            return strArr.indexOf(item) == pos;  
        })
    } else {
        strArruniq = strArr
    }
    
    console.log(strArruniq,pattArruniq)
    console.log(pattArruniq.join('') === strArruniq.join(''))
    return (pattArruniq.join('') === strArruniq.join(''))
    
};

isMatch("b","?*?*")