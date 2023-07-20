function solution(numbers) {
    const result = []
    
    for(let i=0; i<numbers.length;i++){
        for(let j=i+1; j<numbers.length;j++){
            const sum = numbers[i]+numbers[j]
            
            result.push(sum)
        } 
    }
    
    const set = new Set(result)
    
    return Array.from(set).sort((a,b)=>a-b)
}