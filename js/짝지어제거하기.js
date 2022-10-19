/*https://school.programmers.co.kr/learn/courses/30/lessons/12973*/
const solution = (s) => {
  const notSameStack = [];
  for (let i = 0; i < s.length; i++) {
    notSameStack.at(-1) === s[i] ? notSameStack.pop() : notSameStack.push(s[i]);
  }
  return notSameStack.length ? 0 : 1;
};
