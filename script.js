function letterCombinations(input_digit) {
  //Complete the function
	let inparr=[];
    for( c in input_digit)
    {
        inparr.push(input_digit[c]);
    }
    // console.log(inparr);
      let match={0:0 , 1: 1, 2:"abc", 3:"def", 4:"ghi", 5:"jkl", 6:"mno" , 7:"pqrs" , 8:"tuv" , 9:"wxyz"}
      let midarr=[];
      for( let c in inparr)
      {
        for(let k=0;k<1;k++)
        {
            // console.log(match[inparr[c]]);
            midarr.push(match[inparr[c]]);
        }
      }
    //   console.log(midarr);
      let resarr=[];
      for(let i=0;i<midarr.length-1;i++)
      {
       // i==1<len
        for(let c of midarr[i])
        {
            //console.log(c);
            for( let ch of midarr[i+1])
            {
            
                let result= c + ch;
                resarr.push(result);
                
            }
        }
      }
		resarr.sort();
      return resarr;

}

module.exports = letterCombinations;
