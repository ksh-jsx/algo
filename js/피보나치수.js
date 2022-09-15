/*https://school.programmers.co.kr/learn/courses/30/lessons/12945*/

const solution = (n) => {
  const fiboArr = [0, 1];

  const fibo = (n) => {
    /*
    if (fiboArr[n] !== undefined) 
      return fiboArr[n];
      
    fiboArr[n] = fibo(n-1)%1234567 + fibo(n-2)%1234567;
    
    return fiboArr[n];
    */
    for (let i = 2; i <= n; i++) {
      fiboArr[i] = (fiboArr[i - 1] % 1234567) + (fiboArr[i - 2] % 1234567);
    }
    return fiboArr[n];
  };
  return fibo(n) % 1234567;
};

/*
흔한 풀이법으로 풀면 당연히 시간초과 에러
 -> 배열에 값을 넣어 중복계산을 방지하는 다이나믹/재귀 방식으로 했더니 몇개는 해결되었으나 여전히 x
 -> 숫자가 너무 커져서 onerflow가 발생하는 거인듯. 그래서 %1234567 조건이 있는 거인데 (a+b)%c를 하기 전 이미a,b 너무 커서 그런듯
 -> (a+b)%c = (a%c +b%c)%c을 이용하여 계산하기 전 미리 나누어버림 -> 에러 해결
 -> 여전히 남아있는 시간초과 문제는 재귀함수 -> for로 교체하여 해결
*/
