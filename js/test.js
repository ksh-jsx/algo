/*https://programmers.co.kr/learn/courses/30/lessons/42748 */
function solution(array, commands) {
  var answer = []
  for(let i=0;i<commands.length;i++){
    let temp_arr = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>{return a-b});

    answer.push(temp_arr[commands[i][2]]-1)
  }
  return answer;
}

solution([10, 50, 22, 63, 36, 79, 42]	, [[2, 5, 3], [4, 4, 1], [1, 7, 3]])