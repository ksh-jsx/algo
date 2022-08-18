const solution = (survey, choices) => {
  let answer = ''
  let your_point = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
  let type,point // 내 성격유형과 그 유형의 점수

  for(let i=0;i<survey.length;i++){
    if(choices[i]<4){
      type = survey[i].charAt(0)
      point = 4-choices[i]
    }
    else{
      type = survey[i].charAt(1)
      point = choices[i]-4
    }

    your_point[type]+=point
  }
  //console.log(your_point)
  answer+= your_point['R'] >= your_point['T'] ? 'R' : 'T'
  answer+= your_point['C'] >= your_point['F'] ? 'C' : 'F'
  answer+= your_point['J'] >= your_point['M'] ? 'J' : 'M'
  answer+= your_point['A'] >= your_point['N'] ? 'A' : 'N'
  //console.log(answer)
  return answer;
}

solution(["TR", "RT", "TR"],	[7, 1, 3])

/*
먼저 설문조사가 1번 지표~4번 지표 순서가 아닌 랜덤이기 때문에 객체에 유형점수를 저장해야겠다고 생각함


*/