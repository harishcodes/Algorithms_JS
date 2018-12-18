const lengthOfLongestSubstring = str => {
  let result = []
    var lengthArr=[];
    var startStr;
    var remStrArr = [];
    var tempArr=[];

  if (str === ''){
      lengthArr.push(0);
  } else {
	  for (let i=0; i<str.length; i++) {

	      startStr = str.charAt(i);

	      remStr = str.substr(i+1,(str.length-i));
	      tempArr=[];
	      //startStr = startStr.split('');
	      var length = 1;
	      remStrArr = remStr.split('');

	      if (startStr === remStrArr[0]){
		  continue;
	      } else {
		  for (j=0;j<remStrArr.length;j++){
		      if (j===0){
			  length = length + 1;
		      } else {
			if ((remStrArr[j] !== remStrArr[j-1]) && (remStrArr[j] !== startStr) && (!tempArr.includes(remStrArr[j])) ){
			    length = length + 1;
			} else {
			    break;
			}
		      }
		    tempArr.push(remStrArr[j]);
		  }
	      }
	      lengthArr.push(length);
	  }
   }

  return (Math.max(...lengthArr));
}