function solution(t, p) {
    const pLen = p.length
    let result = 0
    
    for(let i=0; i<t.length - pLen + 1;i++){
        const target = Number(t.slice(i,i + pLen))
        
        if(target <= Number(p)) result++
    }
    
    return result
}