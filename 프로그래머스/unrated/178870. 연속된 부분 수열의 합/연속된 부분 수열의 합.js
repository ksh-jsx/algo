// function solution(sequence, k) {
//     let answer = [0, sequence.length]
    
//     for (let i=0; i<sequence.length;i++){
//         const temp_sequence = [...sequence].splice(i)
//         let cnt = 0
//         let sum = 0
        
//         while(temp_sequence.length){
//             sum+=temp_sequence.shift()
//             cnt++
            
//             if(sum === k){
//                 if(answer[1] > cnt) answer = [i, cnt]
//             }
            
//             if(sum>=k) break
//         }
//     }
    
//     return [answer[0], answer[0]+answer[1]-1]
// }

function solution(sequence, k) {
    var answer = [];
    const prefix = [0]       
    let maxL  = Infinity   

    sequence.forEach((num,i)=>{
        prefix.push(num+prefix[i])
    })
    
    let left = 0
    let right = 0
    
    while(left<=right) {
        const sum = prefix[right] - prefix[left]
        
        if(sum === k) {
            const nowL = right-1 - left 
            
            if(maxL > nowL) {
                answer = [left,right-1]
                maxL = nowL
            }
        }
        
        if(sum<k) {
            right++
        } else left++
    }
    
    return answer;
}