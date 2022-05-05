/*https://programmers.co.kr/learn/courses/30/lessons/43165*/
solution=(numbers,target)=> {

  let answer = 0;

  dfs = (level,sum)=>{
    if(level===numbers.length){
      if(sum===target)
        answer+=1
      return ;
    }
    dfs(level+1,sum+numbers[level])
    dfs(level+1,sum-numbers[level])
  }
  dfs(0,0)
  console.log(answer)
  return answer;
}

solution2=(numbers,target)=> {

  let answer = 0;  
  
  dfs = (nums,sum)=>{
    const target_num = nums.shift()
    console.log(target_num,nums,sum)
    if(!numbers.length){
      if(sum===target)
        answer+=1
      return ;
    }
    dfs(nums,sum+target_num)
    dfs(nums,sum-target_num)
  }

  dfs(numbers,0)
  console.log(numbers)
  return answer;
}

solution([1, 1, 1, 1, 1],	3)