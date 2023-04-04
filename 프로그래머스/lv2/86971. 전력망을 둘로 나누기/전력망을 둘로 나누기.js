function solution(n, wires) {
   const dict = {}
   const answers = []
    
   wires.forEach((wire) => {
       dict[wire[0]] = wire[0] in dict ? [...dict[wire[0]], wire[1]] : [wire[1]]
       dict[wire[1]] = wire[1] in dict ? [...dict[wire[1]], wire[0]] : [wire[0]]
   })
    
   wires.forEach((wire) => {
       const visited_point = []
       const [point1,point2] = wire
       const stack = [...dict[point1]]
       
       visited_point.push(point1,point2)
       
       while(stack.length){
           const target = stack.shift()
           
           if(visited_point.indexOf(target) === -1){
               visited_point.push(target)
               stack.push(...dict[target])
           }
       }
       
       answers.push(Math.abs(n-(visited_point.length - 1)*2));
   })
    
    return Math.min(...answers)
}