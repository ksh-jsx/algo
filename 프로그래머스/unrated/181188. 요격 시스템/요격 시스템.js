function solution(targets) {
    const sortedTargets = targets.sort((a,b)=>a[0] - b[0])
    let count = 1
    let target_pos = [sortedTargets[0][0], sortedTargets[0][1]]

    for(let i=1; i<sortedTargets.length;i++){
        const [start,end] = sortedTargets[i]
        
        if(target_pos[1]>start) {
            let new_end = target_pos[1] > end ? end : target_pos[1]
            target_pos = [start,new_end]
        } else {
            count++
            target_pos = [start,end]
        }
    }
    
    return count
}