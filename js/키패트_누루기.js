/*https://programmers.co.kr/learn/courses/30/lessons/67256 */

const left_arr=[1,4,7]
const right_arr=[3,6,9]
let position={lh:10,rh:12}
let res = ''
function solution(numbers, hand) {
  var answer = [];

  for(let i in numbers){
    console.log('이번 숫자는:',numbers[i])
    console.log('손가락은:',position)
    if(numbers[i] ==0) numbers[i] = 11

    if(left_arr.includes(numbers[i]))
      operation('L',numbers[i])
    else if(right_arr.includes(numbers[i]))
      operation('R',numbers[i])
    else{
      ld = Math.abs(parseInt((position.lh-1)/3)-parseInt((numbers[i]-1)/3))+Math.abs((position.lh-1)%3-(numbers[i]-1)%3) //몇줄 떨어져 있는지 + 몇칸 떨어져있는지
      rd = Math.abs(parseInt((position.rh-1)/3)-parseInt((numbers[i]-1)/3))+Math.abs((position.rh-1)%3-(numbers[i]-1)%3) 
      console.log(ld,rd)
      if(ld<rd)
        operation('L',numbers[i])
      else if(ld>rd)
        operation('R',numbers[i])
      else
        hand == 'left' ? operation('L',numbers[i]) : operation('R',numbers[i])
    }
    console.log(res[i])
    console.log('----------------')
  }
  answer = res
  return answer;
}

function operation(lr,num){
  res+=lr
  lr == 'L' ? position.lh=num : position.rh=num
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],'left')