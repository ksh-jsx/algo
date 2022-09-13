/*https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript */

function solution(s) {
  const arr = s.split(" ").map(Number);
  const answer = Math.min(...arr) + " " + Math.max(...arr);
  return answer;
}
