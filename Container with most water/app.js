/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    var maxArea = height.reduce((prevArea,currentVal,index,arr) => {

        var x=0;
        var area;
        if (index == 0){
            prevArea = 0
        }

        while (x < arr.length){

            if (currentVal <= arr[x]){
                area = (Math.abs(index-x))*currentVal;

            }

            x = x + 1;
            if (area > prevArea){
                prevArea = area;

            }
        }
        return prevArea;

    },{});
return maxArea;
};