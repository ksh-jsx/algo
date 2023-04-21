function solution(answers) {
    const result = []
    const stu1 = Array.from(new Array(answers.length), (_, i) => i%5 + 1);
    const stu2 = Array.from(new Array(answers.length), (_, i) => {
        if((i+1)%2) return 2
        else {
            if(i%8 === 1) return 1
            else return (i%8+1)/2+1
        }
    });
    const stu3 = Array.from(new Array(answers.length), (_, i) => {
        const num = i%10+1
        if(num === 1 || num === 2) return 3
        else if(num === 3 || num === 4) return 1
        else if(num === 5 || num === 6) return 2
        else return Math.ceil(num/2)
        
    });
    
    const ans1 = stu1.filter((n,i)=>n===answers[i]).length
    const ans2 = stu2.filter((n,i)=>n===answers[i]).length
    const ans3 = stu3.filter((n,i)=>n===answers[i]).length

    const max = Math.max(ans1,ans2,ans3)
    const ans = [[ans1,1],[ans2,2],[ans3,3]].filter(e=>e[0] === max).map((e)=> e[1])
    
    return [[ans1,1],[ans2,2],[ans3,3]].filter(e=>e[0] === max).map((e)=> e[1])
}