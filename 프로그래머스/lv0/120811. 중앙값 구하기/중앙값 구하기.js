function solution(array) {
    const {length} = array
    return array.sort((a,b)=>a-b)[Math.floor(length/2)]
}