const get_sum = (q) =>{
  let tmp_sum = 0
  q.forEach(i => tmp_sum+=i)
  return tmp_sum*1
}

const solution = (queue1, queue2) => {
  let answer = 0;
  let queue1_sum = get_sum(queue1)
  let queue2_sum = get_sum(queue2)
  
  if((queue1_sum+queue2_sum)%2 === 1)
    return -1

  while(queue1_sum != queue2_sum){
    
    if(queue1_sum>queue2_sum){
      const shift_num = queue1.shift()
      queue2.push(shift_num)
      queue1_sum -= shift_num
      queue2_sum += shift_num
    }
    else{
      const shift_num = queue2.shift()
      queue1.push(shift_num)
      queue1_sum += shift_num
      queue2_sum -= shift_num
    }

    answer+=1

    if(answer > queue1.length+queue2.length)
      return -1
    
    console.log('큐1:'+queue1+'/'+queue1_sum)
    console.log('큐2:'+queue2+'/'+queue2_sum)
    console.log('------')
  }
  console.log(answer)
  return answer;
}

solution([3, 2, 7, 2],	[4, 6, 5, 1])