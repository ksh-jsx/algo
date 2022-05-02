/*https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript*/
function solution(absolutes, signs) {
  var answer = 0;
  for(let i in absolutes){
    if(signs[i])
      answer+=absolutes[i]
    else
      answer-=absolutes[i]
  }
  console.log(answer)
  return answer;
}

solution([4,7,12],[true,false,true])