function solution(line) {
    const position_list = [];
    const {length} = line

    for(let i=0; i<length;i++){
        const target1 = line.shift()

        for(let j=0; j<line.length;j++){
            const target2 = line[j]

            const pos_x = (target1[1]*target2[2] - target1[2]*target2[1]) / (target1[0]*target2[1] - target1[1]*target2[0])
            const pos_y = (target1[2]*target2[0] - target1[0]*target2[2]) / (target1[0]*target2[1] - target1[1]*target2[0])
            if(Number.isInteger(pos_x) && Number.isInteger(pos_y)){
               position_list.push([pos_x,pos_y]) 
               
            }
        }   
    }
    const range_x = Math.max(...position_list.map(pos=>pos[0])) - Math.min(...position_list.map(pos=>pos[0]))
    const range_y = Math.max(...position_list.map(pos=>pos[1])) - Math.min(...position_list.map(pos=>pos[1]))
    
    const table = new Array(range_y + 1)
        .fill(null)
        .map(() => new Array(range_x + 1).fill(null).map(() => "."));


    position_list.forEach(([x, y]) => (table[Math.max(...position_list.map(pos=>pos[1])) - y][x - Math.min(...position_list.map(pos=>pos[0]))] = "*"));
    return table.map((v) => v.join(""));
}