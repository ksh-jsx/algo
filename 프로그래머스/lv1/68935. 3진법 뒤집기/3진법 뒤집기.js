function solution(n) {
    const third = n.toString(3)
    const reverse = third.split("").reverse().join("")
    const ten = parseInt(reverse,3)
    
    return ten
}