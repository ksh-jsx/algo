function solution(n, works) {
    const {length} = works
    const sum = works.reduce((s,c)=>{return s+c}, 0)
    
    if(sum<=n) return 0
    
    let sorted = works.sort((a,b) => a-b)
    
    while(n){
        const max = sorted[length-1];
        
        for(let i = length-1; i >= 0; i--) {
            if(sorted[i]>=max) {
                sorted[i]--
                n--
            }
            if(!n) break
        }
    }
    
    return sorted.reduce((a,b)=>a + b**2, 0)
   
}