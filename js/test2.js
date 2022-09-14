/*https://school.programmers.co.kr/learn/courses/30/lessons/118667 */

//처음 풀이 -> 배열 pop,push 반복작업을 하니 시간초과문제로 실패
const get_sum = (q) => {
  let tmp_sum = 0;
  q.forEach((i) => (tmp_sum += i));
  return tmp_sum * 1;
};

const solution = (queue1, queue2) => {
  let answer = 0;
  let queue1_sum = get_sum(queue1);
  let queue2_sum = get_sum(queue2);

  if ((queue1_sum + queue2_sum) % 2 === 1) return -1;

  while (queue1_sum != queue2_sum) {
    if (queue1_sum > queue2_sum) {
      const shift_num = queue1.shift();
      queue2.push(shift_num);
    } else {
      const shift_num = queue2.shift();
      queue1.push(shift_num);
    }

    queue1_sum = get_sum(queue1);
    queue2_sum = get_sum(queue2);

    answer += 1;

    if (answer > queue1.length + queue2.length) return -1;

    console.log("큐1:" + queue1 + "/" + queue1_sum);
    console.log("큐2:" + queue2 + "/" + queue2_sum);
    console.log("------");
  }
  console.log(answer);
  return answer;
};

//배열을 하나로 붙이고 투포인터방식으로 해결
function solution(queue1, queue2) {
  const fullArray = [...queue1, ...queue2];
  const average = get_sum(fullArray) / 2;
  let cnt = 0;
  let start = 0;
  let end = queue1.length;
  let sum = get_sum(fullArray.slice(start, end));
  while (average !== sum) {
    if (average > sum) {
      sum += fullArray[end];

      end++;
    } else {
      sum -= fullArray[start];
      start++;
    }
    cnt++;
    if (cnt > 4 * fullArray.length) return -1;
  }
  return cnt;
}
