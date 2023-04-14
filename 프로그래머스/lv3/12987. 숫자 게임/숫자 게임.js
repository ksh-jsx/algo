function solution(A, B) {
    let result = 0
    let left_idx = 0
    let right_idx = 0
    A.sort((a,b)=> a-b)
    B.sort((a,b)=> a-b)
    
    while(right_idx<B.length){
        if(A[left_idx]<B[right_idx]){
            result++
            left_idx++
        }
        
        right_idx++
    }
    
    return result
}