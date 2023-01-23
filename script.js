function letterCombinations(input_digit) {
  //Complete th
	const map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
	  let result = [''];
	  for (let digit of input_digit) {
	      let letters = map[digit];
	      let temp = [];
	      for (let letter of letters) {
	          for (let r of result) {
	              temp.push(r + letter);
	          }
	      }
	      console.log(temp)
	      result = temp;
		  
	  }
	result=result.sort();
	return result;
}

module.exports = letterCombinations;
