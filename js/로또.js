/*https://programmers.co.kr/learn/courses/30/lessons/77484*/

function solution(lottos, win_nums) {
    var answer = new Array(2).fill(0);
    for(let i in lottos){
        if(win_nums.indexOf(lottos[i])!=-1){
            answer[0]+=1
            answer[1]+=1
        }
        else if(lottos[i] == 0)
            answer[0]+=1
    }
    console.log(answer)
    answer[0] = answer[0]>1 ? 7-answer[0] : 6;
    answer[1] = answer[1]>1 ? 7-answer[1] : 6;
    console.log(answer)
    return answer;
}

solution([44, 1, 0, 0, 30, 25],[31, 10, 45, 1, 6, 19])