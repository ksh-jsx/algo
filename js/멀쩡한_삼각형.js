/*https://programmers.co.kr/learn/courses/30/lessons/62048*/
function gcd(w, h) {   

  const mod = w % h
  if (mod === 0) {
      return h
  }
  return gcd(h, mod)
}

function solution(w, h) {
  const gcdVal = gcd(w, h);
  return w * h - (w + h - gcdVal);
}

solution(8,12)