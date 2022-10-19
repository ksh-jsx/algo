const solution = (bridge_length, weight, truck_weights) => {
  let answer = 0;
  let isCrossing = [];
  let sum = 0;
  while (truck_weights.length) {
    answer++;
    isCrossing.push(truck_weights[0]);
    sum += isCrossing.at(-1);

    if (sum > weight) {
      sum -= isCrossing.at(-1);
      isCrossing.pop();
      isCrossing.push(0);
    } else {
      truck_weights.shift();
    }
    //console.log("현재 시간: "+answer+" / 남은 트럭: "+truck_weights+" / 다리 위엔: "+isCrossing+" / sum:"+sum)
    if (isCrossing.length === bridge_length) {
      const escape = isCrossing.shift();
      sum -= escape;
      while (isCrossing[0] === 0) isCrossing.shift();
    }
  }
  return answer + bridge_length;
}; //먼저 푼 것....어렵게 품

const solution2 = (bridge_length, weight, truck_weights) => {
  let onBridge = new Array(bridge_length).fill(0);
  let answer = 0;

  while (truck_weights.length) {
    answer++;
    onBridge.pop();
    if (onBridge.reduce((a, b) => a + b) + truck_weights[0] > weight) {
      onBridge.unshift(0);
    } else {
      onBridge.unshift(truck_weights.shift());
    }
  }
  return answer + bridge_length;
}; //이게 훨씬 쉬움..
