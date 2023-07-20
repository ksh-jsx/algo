const solution = (picks, minerals) => {
    let result = 0;
    const chunkedArray = chunkArray(minerals);
    const sortedArray = sortNElements(chunkedArray,picks.reduce((s,c)=>s+c,0))
    
    sortedArray.forEach((data)=>{
        if(picks[0]){
            result+=data['diamond']+data['iron']+data['stone']
            picks[0] -=1
        } else if(picks[1]) {
            result+=data['diamond']*5+data['iron']+data['stone']
            picks[1] -=1
        } else if(picks[2]) {
            result+=data['diamond']*25+data['iron']*5+data['stone']
            picks[2] -=1
        }
    })
    
    return result
}

const sortNElements = (array, n) => {

  const sortedPart = array.slice(0, n).sort((a, b) => {
      if (a.diamond !== b.diamond) {
        return b.diamond - a.diamond;
      }
      if (a.iron !== b.iron) {
        return b.iron - a.iron;
      }
      return b.stone - a.stone;
    });


  const rest = array.slice(n);

  return [...sortedPart, ...rest];
}

const chunkArray = (array, chunkSize = 5) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    const countObj = countItems(chunk);
    result.push(countObj);
  }
  return result;
}

const countItems = (array) => {
  const counts = {
      diamond:0,
      iron:0,
      stone:0,
  };

  for (const item of array) {
    counts[item] = counts[item]  + 1;
  }

  return counts;
}
