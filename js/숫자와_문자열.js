/*https://programmers.co.kr/learn/courses/30/lessons/81301 */
function solution(s) {
  var answer = '';
  const num_arr = ['0','1','2','3','4','5','6','7','8','9']
  const str_arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
  let temp_str ='';
  for(let x=0;x<s.length;x++){
    temp_str +=s[x]
    is_have_num = num_arr.indexOf(temp_str)
    is_have_str = str_arr.indexOf(temp_str)
    if(is_have_num!=-1 || is_have_str!=-1){
      temp_str = ''
      answer+=is_have_num!=-1 ? is_have_num.toString() : is_have_str.toString()
    }
  }
  return Number(answer);
}

solution("one4seveneight")