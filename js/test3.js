const cal_need_hour = (x,needs) =>{
  
  if(needs[0] === 0){
    if(x[1] !== 0)
      return needs[1]/x[1]
  }
  else if(needs[1] === 0){
    if(x[0] !== 0)
      return needs[0]/x[0]
  }
  else
    return Math.min(needs[1]/x[1],needs[0]/x[0])
}

const choice_best_study = (skills,needs) =>{
  
  let choice = [skills[0][0],skills[0][1]]
  let min_need_hour = Number.MAX_SAFE_INTEGER
  
  for(let i=0;i<skills.length;i++){
    let need_hour = cal_need_hour(skills[i],needs)
    
    if(min_need_hour > need_hour){
      choice = skills[i]
      min_need_hour = need_hour
    }
    else if(min_need_hour === need_hour){
      const sum1 = choice[0]+choice[1]
      const sum2 = skills[i][0]+skills[i][1]
      if(sum1<sum2){
        choice = skills[i]
        min_need_hour = need_hour
      }
    }
  }
  return {choice,min_need_hour}
}

const solution = (alp, cop, problems) => {
  let answer = 0;
  let my_skills = [[1,0],[0,1]]

  problems.sort(function(a, b)  { // 풀 순서 정렬
    const sum1 = a[0]+a[1]
    const sum2 = b[0]+b[1]

    if(sum1 > sum2) return 1;
    if(sum1 === sum2) return 0;
    if(sum1 < sum2) return -1;
  });

  for(let i=0;i<problems.length;i++){
    const target_problem = problems[i]
    
    while(alp<target_problem[0] || cop<target_problem[1]){
    
      const low_about_alp = target_problem[0]>alp ? target_problem[0]-alp : 0
      const low_about_cop = target_problem[1]>cop ? target_problem[1]-cop : 0
      
      let{choice,min_need_hour} = choice_best_study(my_skills,[low_about_alp,low_about_cop])
      
      alp+=choice[0]*min_need_hour
      cop+=choice[1]*min_need_hour
      answer+=min_need_hour
      
    }
    my_skills.push([target_problem[2]/target_problem[4],target_problem[3]/target_problem[4]])
    
  }
  
  return answer;
}

solution( 10,10,[[10,15,2,1,2],[20,20,3,3,4]]	)