function solution(number) {
    const combi = combinations(number,3)
    let cnt = 0
    combi.forEach((arr)=>{
        const sum = arr.reduce((s,c)=>s+c,0)
        if(sum === 0) cnt++
        
    })
    
    return cnt
}

function combinations(arr, n) {
  const result = [];

  function combine(currentCombination, start) {
    if (currentCombination.length === n) {
      result.push(currentCombination);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combine([...currentCombination, arr[i]], i + 1);
    }
  }

  combine([], 0);
  return result;
}