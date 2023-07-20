function solution(number, limit, power) {
    const countDivisors = () => {
      const divisorsCount = new Array(number + 1).fill(0);

      for (let i = 1; i <= number; i++) {
            for (let j = i; j <= number; j += i) {
                divisorsCount[j]++;
                
            }
      }

      return divisorsCount.slice(1); // 0번 인덱스는 사용하지 않으므로 잘라냄
    }
    
   const divisors = countDivisors()
   console.log(divisors)
   return divisors.reduce((s,c)=>c>limit ? s+power : s+c,0)
}

