function solution(operations) {
    const queue = []
    operations.forEach((operation)=>{
        [type, number] = operation.split(" ")
        
        if(type === 'I'){
            queue.push(Number(number))
        } else {
            const idx = queue.indexOf(number === '1' ? Math.max(...queue) : Math.min(...queue))
            queue.splice(idx,1)
        }  
    })
    
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0,0]
}