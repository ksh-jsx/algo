/*https://school.programmers.co.kr/learn/courses/30/lessons/70129 */

const solution = (s) => {
  let cnt = 0;
  let remove0 = 0;
  while (s !== "1") {
    remove0 += s.split("0").length - 1;
    s = s.replace(/0/g, "");
    s = s.length.toString(2);

    cnt++;
  }

  return [cnt, remove0];
};

//0개수 구해서 remove0에 더함 -> 0들 제거 -> 2진수로 변환 -> 반복...
