function solution(p) {
    let count = 0
    for(let i=0; i<p.length;i++){
        const target = p[i]
        if(target === '(') count++
        else if(target === ')') count--
        
        if(count === 0 ) console.log('균형')
    }
}