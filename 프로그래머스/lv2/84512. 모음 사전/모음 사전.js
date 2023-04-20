function solution(word) {
    let answer = 0
    const char_list = ['A','E','I','O','U']
    const num_list = [781,156,31,6,1]
    
    word.split("").forEach((alphabet,i) => {
        answer += char_list.findIndex((char) => char === alphabet) * num_list[i]
       
    })
    
    return answer+word.length
}