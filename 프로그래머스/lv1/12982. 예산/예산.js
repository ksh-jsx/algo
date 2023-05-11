function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let rest = budget
    let cnt = 0
    
    while(d.length){
        rest -= d.shift()
        if(rest<0) break
        cnt++
        //console.log(rest,d,cnt)
    }
    return cnt
}