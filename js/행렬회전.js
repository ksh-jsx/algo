/*https://programmers.co.kr/learn/courses/30/lessons/77485 */

function solution(rows, columns, queries) {
  
  var answer = [];

  let arr = Array.from(new Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  ); //빈배열 생성

  for(let i=1;i<=rows;i++){
    for(let j=1;j<=columns;j++){
      arr[i][j] = (i - 1) * columns + j;
    }
  } //숫자채우기 

  
  for (let tc = 0; tc < queries.length; tc++) {
    let [x1,y1,x2,y2] = queries[tc]
    let num_arr = []    

    for(let i=y1;i<y2;i++) num_arr.push(arr[x1][i])
    for(let i=x1;i<x2;i++) num_arr.push(arr[i][y2])
    for(let i=y2;i>y1;i--) num_arr.push(arr[x2][i])
    for(let i=x2;i>x1;i--) num_arr.push(arr[i][y1]) //배열에 위치 바뀔 숫자들 넣기
    
    answer.push(Math.min(...num_arr)) 
    
    const tmp = num_arr.pop()
    num_arr.unshift(tmp) //맨 뒤 숫자 맨앞으로
    
    for(let i=y1;i<y2;i++) arr[x1][i] = num_arr.shift()
    for(let i=x1;i<x2;i++) arr[i][y2] = num_arr.shift()
    for(let i=y2;i>y1;i--) arr[x2][i] = num_arr.shift()
    for(let i=x2;i>x1;i--) arr[i][y1] = num_arr.shift() // 다시 넣어줌..맨 뒤 숫자가 맨 맢으로 왔으니 하나씩 밀려서 들어감
  }
  return answer;
}

console.log(solution(3,3,[[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]	))