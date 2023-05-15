function solution(n, arr1, arr2) {
const answer = [];

for (let i = 0; i < n; i++) {
    const strLine = (arr1[i] | arr2[i]).toString(2)
    const arrLine = strLine.split("")
    while (arrLine.length < n) {
        arrLine.unshift("0")
    }
    const decLine = (arrLine.map(i => i === "1" ? "#" : " ")).join("")
    answer.push(decLine)
}
return answer;
}