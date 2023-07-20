function solution(food) {
    const result = [0]
    
    for(let i=food.length-1;i>0;i--){
        const cnt = Math.floor(food[i]/2)
        for(_=0;_<cnt;_++){
            result.push(i)    
        }
        for(_=0;_<cnt;_++){
            result.unshift(i)    
        }
       
    }
    
    return result.join("")
}