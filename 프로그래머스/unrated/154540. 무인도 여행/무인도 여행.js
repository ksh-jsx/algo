function solution(maps) {
    let new_map = maps.map((row)=>row.split(""))
    const result = []
    
    for(let i=0; i<new_map.length;i++){
        for(let j=0; j<new_map[i].length;j++){
            if(new_map[i][j]==='X') continue
            const stack = [[new_map[i][j],i,j]]
            let cnt = 0
            
            while(stack.length){
                const [num,x,y] = stack.shift()
                if(new_map[x][y]==='X') continue
                
                cnt+=Number(num)
                new_map[x][y] = 'X'
                
                if(x>0 && new_map[x-1][y] !== 'X') stack.push([new_map[x-1][y],x-1,y])
                if(y<maps[0].length-1 && new_map[x][y+1] !== 'X') stack.push([new_map[x][y+1],x,y+1])
                if(x<maps.length-1 && new_map[x+1][y] !== 'X') stack.push([new_map[x+1][y],x+1,y])
                if(y>0 && new_map[x][y-1] !== 'X') stack.push([new_map[x][y-1],x,y-1])
                
            }
            result.push(cnt)
        }
    }
    
    return result.length>0 ? result.sort((a,b)=>a-b) : [-1]
}