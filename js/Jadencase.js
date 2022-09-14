/* https://school.programmers.co.kr/learn/courses/30/lessons/12951*/
function solution(s) {
  s = s.toLowerCase();
  var answer = s
    .split(" ")
    .map((s) => {
      let arr = s.split("");
      if (arr[0] != null) arr[0] = arr[0].toUpperCase();
      return arr.join("");
    })
    .join(" ");

  return answer;
}
//배열 내 특정위치 글자 바꾸기 예제
