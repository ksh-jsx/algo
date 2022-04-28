/*https://programmers.co.kr/learn/courses/30/lessons/42890 */

function combination(elements, k) {
  
  let prev_elements = [];
  let results = [];
  
  function dfs(elements, k) {
      if (prev_elements.length === k) {
          const tmp = prev_elements.slice().join('');
          results.push(tmp);
          return ;
      }
      
      for (let i = 0; i < elements.length; i++) {
          let next_elements = elements.slice(i + 1, elements.length);
          prev_elements.push(elements[i]);
          dfs(next_elements, k);
          prev_elements.pop();
      }
  }
  
  dfs(elements, k);
  return results;
}

function isUnique(tuple) {    
  const tmp = tuple.map(item => item.join(''));
  const set = new Set(tmp);
  
  return tmp.length === set.size ? true : false
}

function solution(relation) {
  let answer = 0;
  
  const colNum = relation[0].length;
  
  let indexes = new Array(colNum).fill(0).map((_, i) => i);
  
  
  // column들의 조합
  let colCom = [];    
  for (let i = 0; i < colNum; i++) {
      colCom.push(...combination(indexes, i + 1));
  }
  
  while (colCom.length > 0) {      
      const columns = colCom.shift().split('');
    
      // 유일성
      const tuple = relation.map(row => columns.map(col => row[col]));
      if (isUnique(tuple) === true) {
          // 유일하다면 희소성
          answer += 1;
          
          const colComTmp = [];
          for (let i = 0; i < colCom.length; i++) {
              columns.map(col => {
                  if (!colCom[i].includes(col)) {
                      colComTmp.push(colCom[i]);
                  }
              });
          }

          colCom = colComTmp;
      } else {
          continue;
      }
  }
  
  return answer;
}

console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]))