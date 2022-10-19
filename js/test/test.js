const DIRECTION = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
];

const isInRange = (nextX, nextY, n) => nextX < 1 || nextY < 1 || nextX > n || nextY > n;
;

const solution = (N, mine, P) => {
  const opend = [[P[0],P[1]]] //이미 누른곳 저장
  const queue = [[P[0], P[1],1]]; //검사해야할 위치들

  while(queue.length) {
      let [x,y] = queue.shift()
      let isBoom = true
     
      //console.log("=================")
      //console.log("현재위치:"+x,y," / 남은 위치: "+queue)
      
      for (let i = 0; i < 8; i++) {
          const [dx, dy] = DIRECTION[i];
          const nextX = dx + x,nextY = dy + y; 
          if (mine.filter(m=>(m[0] == nextX && m[1] == nextY)).length) isBoom = false; //폭탄이 있다면?
      }
      if(isBoom){
          for (let i = 0; i < 8; i++) {
              const [dx, dy] = DIRECTION[i];
              const nextX = dx + x,nextY = dy + y;  
              if (isInRange(nextX, nextY, N)) continue; //범위 밖이라면?
              if (opend.filter(x=>(x[0] === nextX && x[1] === nextY)).length) continue; //이미 누른 곳이라면?
              if (mine.filter(m=>(m[0] === nextX && m[0] === nextY)).length) break; //폭탄이 있다면?

              opend.push([nextX,nextY])
              queue.push([nextX, nextY]);
              //console.log("큐:"+queue)                
          }
      }
      
  }
  //console.log(opend.length)
  return opend.length
}