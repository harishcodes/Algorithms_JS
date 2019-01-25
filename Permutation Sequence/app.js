/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
    let inpArr = range(1,n)
    var result =[], j=0, found=false
    const getPerm = (arr,memo=[]) => {
        
        if (arr.length === 0){
            j++
            
            if (j===(k)){
                //console.log(memo)
                found = true
                result = memo
                //break
            }
            return result
        }
        
        for (var i= 0; i<arr.length;i++) {
            
            let curr = arr.slice();
            let next = curr.splice(i, 1);  
            //console.log(i)
            getPerm(curr,memo.concat(next))
            if (found){
                return result.join('')
            }
        }
        
        
    }

    var res =getPerm(inpArr) 
    console.log(res)
    return res
    
};

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

getPermutation(9,36000)
//getPermutation(3,5)