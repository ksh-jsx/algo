/*https://school.programmers.co.kr/learn/courses/30/lessons/12906*/

function solution(arr)
{
    let answer = [];
    
    for(let i=0; i<arr.length;i++){
        const num = arr[i]
        if(answer.slice(-1)[0] != num)
            answer.push(num)
    }   
    
    return answer;
}

solution([1,1,3,3,0,1,1])