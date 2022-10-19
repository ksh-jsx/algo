// 상 우 하 좌
const DIRECTION = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

// 사용이 가능한 길인지 확인하는 함수
const isRoad = (nextY, nextX, row, col) =>
  nextY < 0 || nextX < 0 || nextY > row || nextX > col;

// BFS 활용
function solution(maps) {
  const row = maps.length - 1,
    col = maps[0].length - 1;

  // 큐 - 시작 위치 y, x, 이동 거리
  const queue = [[0, 0, 1]];

  while (queue.length) {
    // 큐 추출
    let [y, x, count] = queue.shift();
    // 상대 팀 진영이라면
    if (y === row && x === col) return count;
    // 동서남북 확인
    for (let i = 0; i < 4; i++) {
      const [dy, dx] = DIRECTION[i];
      const nextY = dy + y,
        nextX = dx + x;
      // 맵 밖으로 나간다면
      if (isRoad(nextY, nextX, row, col)) continue;
      // 도착한 곳이 벽이라면
      if (maps[nextY][nextX] === 0) continue;
      // 이미 지난 곳 벽으로 만들어서 다음에 접근 방지
      maps[nextY][nextX] = 0;
      // 다음에 확인해야하는 곳 큐에 추가
      // 갈수 있는 곳이 두 곳이라면 두 곳 추가됨
      queue.push([nextY, nextX, count + 1]);
    }
  }

  return -1;
}

/*
const solution = (maps) => {
  let step = 0;
  let currPos = [0, 0];

  moveTo = (currPos, maps, step) => {
    console.log("현재 위치: " + currPos);
    if (currPos === [maps.length - 1, maps[0].length - 1]) {
      return step;
    }
    step++;
    if (currPos[0] + 1 < maps.length) {
      if (maps[currPos[0] + 1][currPos[1]]) {
        //하
        currPos = [currPos[0] + 1, currPos[1]];
        moveTo(currPos, maps, step);
      }
    }
    if (currPos[1] + 1 < maps[0].length) {
      if (maps[currPos[0]][currPos[1] + 1]) {
        //우
        currPos = [currPos[0], currPos[1] + 1];
        moveTo(currPos, maps, step);
      }
    }
    if (currPos[1] - 1 > -1) {
      if (maps[currPos[0]][currPos[1] - 1]) {
        //좌
        currPos = [currPos[0], currPos[1] - 1];
        moveTo(currPos, maps, step);
      }
    }
    if (currPos[0] - 1 > -1) {
      if (maps[currPos[0] - 1][currPos[1]]) {
        //상
        currPos = [currPos[0] - 1, currPos[1]];
        moveTo(currPos, maps, step);
      }
    }
    return -1;
  };

  return moveTo(currPos, maps, step);
};
*/
