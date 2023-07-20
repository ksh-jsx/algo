function solution(plans) {
    const result = []
    const rest = []
    const sortedPlans = plans.sort((a, b) => timeToMinutes(a[1]) - timeToMinutes(b[1]));
    
    for(let i=0; i<sortedPlans.length-1;i++){
        const [type,startTime, needTime] = sortedPlans[i]
        const nextStartTime = sortedPlans[i+1][1]
        let betweenTime = timeToMinutes(nextStartTime) - timeToMinutes(startTime)
        
        if(betweenTime < needTime) rest.push([type,needTime-betweenTime])
        else {
            result.push(type)
            betweenTime -= needTime
            
            while(betweenTime && rest.length){
                const target = rest.pop()
      
                if(betweenTime >= target[1]) {
                    result.push(target[0])
                    betweenTime -= target[1]
                } else {
                    rest.push([target[0],target[1] - betweenTime])
                    break
                }
            }
        }
        //console.log(result)
        //console.log(rest)
    }
    const last = rest.reverse().map((x)=>x[0])
    console.log(last)
    return [...result,sortedPlans[sortedPlans.length-1][0],...last ]
}

function timeToMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

