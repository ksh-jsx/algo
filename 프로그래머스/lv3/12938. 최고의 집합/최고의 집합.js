function solution(n, s) {
    if(s/n < 1) return [-1]
    
    let extra = s % n
    const result = new Array(n).fill(Math.floor(s / n))
    
    let idx = result.length - 1
    while(extra>0){
       result[idx--]++
        extra--
    }
    
    return result.sort()
}