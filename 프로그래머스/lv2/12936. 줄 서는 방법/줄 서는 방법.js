function solution(n, k) {
   // 팩토리얼을 미리 계산하여 재사용
  const factorial = [];
  factorial[0] = 1;
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  // 사용한 숫자를 체크하기 위한 배열
  const used = new Array(n + 1).fill(false);

  function dfs(index, k, current) {
    if (index === n) {
      return current;
    }

    const groupSize = factorial[n - 1 - index];
    for (let i = 1; i <= n; i++) {
      if (!used[i]) {
        if (k <= groupSize) {
          used[i] = true;
          return dfs(index + 1, k, [...current, i]);
        }
        k -= groupSize;
      }
    }
  }

  return dfs(0, k, []);
}