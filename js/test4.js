const Rotate = (arrs) => {

  let tmp_arr = []    
  rc_row = arrs.length-1
  rc_col = arrs[0].length-1
  for(let i=0;i<rc_col;i++) tmp_arr.push(arrs[0][i])
  for(let i=0;i<rc_row;i++) tmp_arr.push(arrs[i][rc_col])
  for(let i=rc_col;i>0;i--) tmp_arr.push(arrs[rc_row][i])
  for(let i=rc_row;i>0;i--) tmp_arr.push(arrs[i][0]) //배열에 위치 바뀔 숫자들 넣기
  
  const tmp = tmp_arr.pop()
  tmp_arr.unshift(tmp) //맨 뒤 숫자 맨앞으로
  
  for(let i=0;i<rc_col;i++) arrs[0][i] = tmp_arr.shift()
  for(let i=0;i<rc_row;i++) arrs[i][rc_col] = tmp_arr.shift()
  for(let i=rc_col;i>0;i--) arrs[rc_row][i] = tmp_arr.shift()
  for(let i=rc_row;i>0;i--) arrs[i][0] = tmp_arr.shift() // 다시 넣어줌..맨 뒤 숫자가 맨 맢으로 왔으니 하나씩 밀려서 들어감

  return arrs
}




const ShiftRow = (arrs) => {

  let target_arr = arrs[arrs.length-1] 

  for(let i=0;i<arrs.length;i++){
    let tmp_arr = arrs[i]
    arrs[i] = target_arr
    target_arr = tmp_arr
  }

  return arrs
}

const solution = (rc, operations) => {
  
  let answer = rc
  
  for(let i=0;i<operations.length;i++){
    
    if(operations[i] == "Rotate")
      answer = Rotate(answer)
    else  
      answer = ShiftRow(answer)
    console.log(answer)
  }
  
  return answer;
}

solution([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],["ShiftRow", "Rotate", "ShiftRow", "Rotate"])