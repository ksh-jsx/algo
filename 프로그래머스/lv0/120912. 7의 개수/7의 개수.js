function solution(array) {
    let answer = 0;
    
    for(let target of array){
        const nums = target.toString().split("")
        
        for(let num of nums){
            if(num === '7') answer++
        }
    }
    return answer
}