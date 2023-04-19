function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    const stack = []

    numbers.forEach((num,i)=>{
        while(stack && numbers[stack[stack.length-1]] < num) answer[stack.pop()] = num
        
        stack.push(i)
    })
    
    return answer;
}