/*https://school.programmers.co.kr/learn/courses/30/lessons/12924*/
const solution = (n) => {
  let cnt = 1;
  for (let i = 1; i <= parseInt(n / 2); i++) {
    if (isExpressible(n, i)) cnt++;
  }
  return cnt;
};

const isExpressible = (n, i) => {
  while (n >= i) {
    n -= i;
    i++;
  }
  if (n === 0) return true;
  else return false;

  /*
      if(res > 0) return isExpressible(new_n,new_i)
      else if(res === 0 ) return true
      else return false
      */
};

//처음에 재귀함수로 풀었으나 효율성 테스트 실패로 while문으로 교체
