function solution(routes) {
    routes.sort((a,b)=>a[0]-b[0])
    let answer = 1
    let min = routes[0][0]
    let max = routes[0][1]
    console.log(routes)
    
    for(let i=1; i<routes.length; i++){
        const [target_min,target_max] = routes[i]
        if(min<=target_min && target_max<=max){
            min = target_min
            max = target_max
            continue
        }
        
        if(min<=target_min && target_min<=max) continue
        
        min = target_min
        max = target_max
        
        answer++
    }
    
    return answer
}