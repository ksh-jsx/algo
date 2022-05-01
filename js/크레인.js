/*https://programmers.co.kr/learn/courses/30/lessons/64061 */
function solution(board, moves) {
  var answer = 0;
  let res_arr = []
  for(let i in moves){
    for(let j in board){
      const target_num = board[j][moves[i]-1]
      if(target_num !=0){
        board[j][moves[i]-1] = 0
        const lastValue = res_arr[res_arr.length - 1];
        //console.log(res_arr)
        if(lastValue == target_num){
          res_arr.pop();
          answer+=2
        }
        else{ 
          res_arr.push(target_num)
        }
        break
      }
    }
  }  
  return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])