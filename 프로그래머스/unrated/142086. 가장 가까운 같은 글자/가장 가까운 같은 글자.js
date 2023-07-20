function solution(s) {
    const save = {}
    result = []
    
    s.split("").forEach((alphabet,i)=>{
        result.push(save[alphabet] !=undefined ? i-save[alphabet] : -1) 
        
        save[alphabet] = i
    })
    
    return result
}