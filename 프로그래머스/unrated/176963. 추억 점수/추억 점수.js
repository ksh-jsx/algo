function solution(name, yearning, photo) {
    const obj = {}
    const result = []
    
    for(let i=0;i<name.length;i++){
        obj[name[i]] = yearning[i]
    }
    
    photo.forEach((arr)=>{
        let cnt = 0
        
        arr.forEach((name)=>{   
            cnt+=obj[name] ? obj[name] : 0
        })
        
        result.push(cnt)
    })
    
    return result
}