/*https://programmers.co.kr/learn/courses/30/lessons/67257 */

const solution = (expression) => {
  let answer = 0;
  let num_arr = expression.split(/[-+*]/).map(x=>x*1)
  let formula_arr = expression.split(/[0-9]/).filter(x=>x!='')
  
  const fc = [ //formula combination
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  for(let i=0;i<fc.length;i++){
    
    let tmp_num = num_arr.slice()
    let tmp_formula = formula_arr.slice()
    //console.log('start:'+tmp_num+'/'+num_arr)
    for(let j=0;j<fc[i].length;j++){
      for (let k = 0; k < tmp_formula.length; k++) {
        if (tmp_formula[k] === fc[i][j]) {
          if (tmp_formula[k] === "*") {
            tmp_num[k] *= tmp_num[k + 1];
            tmp_num.splice(k + 1, 1);
            tmp_formula.splice(k, 1);
            k--;
          } else if (tmp_formula[k] === "+") {
            tmp_num[k] += tmp_num[k + 1];
            tmp_num.splice(k + 1, 1);
            tmp_formula.splice(k, 1);
            k--;
          } else {
            tmp_num[k] -= tmp_num[k + 1];
            tmp_num.splice(k + 1, 1);
            tmp_formula.splice(k, 1);
            k--;
          }
        }
        //console.log(tmp_num)
      }
    }
    if (Math.abs(tmp_num[0]) >= answer) 
      answer = Math.abs(tmp_num[0]);
    //console.log('---------')

  }
  return answer;
}

solution("100-200*300-500+20")