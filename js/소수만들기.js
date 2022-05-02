/*https://programmers.co.kr/learn/courses/30/lessons/12977*/

combination=(arr,n)=>{ //숫자들의 조합 만들기
  let prev_arr = []
  let res_arr = []

  dfs=(arr,n)=>{
    //console.log(arr+'/'+n)
    if(prev_arr.length == n){
      let sum = 0
      for (let i in prev_arr) {
        sum += prev_arr[i]
      }
      res_arr.push(sum)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      let next_elements = arr.slice(i + 1, arr.length)
      prev_arr.push(arr[i])
      dfs(next_elements, n)
      prev_arr.pop()
    }
  }

  dfs(arr,n)
  return res_arr
}

isPrime=(n)=>{
  if(n==1) return false
  for(let i=2;i<n;i++)
    if(n%i==0) return false
  return true
}

solution=(nums)=>{
  var answer = 0
  let comb_arr = []
  
  comb_arr.push(...combination(nums,3))
  
  for(let i=0;i<comb_arr.length;i++){
    if(isPrime(comb_arr[i]))
      answer+=1
  }
  console.log(answer)
  return answer;
}

solution([1,2,7,6,4])
