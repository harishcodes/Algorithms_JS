var letterCombinations = function(digits) {
  if (digits.length === 0) return []

  const digitToLetters = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  let combinations = ['']
  
  for (let digit of digits) {
      const letters = digitToLetters[digit] 
      const newCombinations = []
     
      for (let letter of letters) {
          for (let combination of combinations) {
              console.log('comb :'+ combination);
              console.log('lett :'+ letter);
              newCombinations.push(combination + letter)
          }
      }
      console.log(newCombinations);
      combinations = newCombinations
  }

  return combinations
};

letterCombinations('234');