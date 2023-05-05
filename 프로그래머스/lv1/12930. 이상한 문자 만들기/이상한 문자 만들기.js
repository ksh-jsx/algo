function solution(s) {
    var array = s.split(' ');
    var result ="";
    var result2 = [];


    array.forEach(function(item){
        for(let i = 0; i<item.length; i++){
            if(i%2==0){
                result += item[i].toUpperCase()
            }else{
                result += item[i].toLowerCase()
            }
        }
        result2.push(result) ;
        result = "";
    })
    let answer = result2.join([" "]);
    return answer;
}