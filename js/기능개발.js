/*https://programmers.co.kr/learn/courses/30/lessons/42586 */
function solution(progresses, speeds) {
  var answer = [];
  let cnt =0;
  let remain_day = progresses.map((x,i)=>Math.ceil((100-x)/speeds[i]))
  let max_day = remain_day[0]
 
  for(let i=0;i<remain_day.length;i++){
    if(remain_day[i]>max_day){
      max_day = remain_day[i]
      answer.push(cnt)
      cnt=1
    }
    else{
      cnt++
    }
  }
  answer.push(cnt)
  console.log(answer)
  return answer;
}

solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]	)