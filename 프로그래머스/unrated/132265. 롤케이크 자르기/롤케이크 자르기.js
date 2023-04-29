function solution(topping) {
    let result = 0
    const ob = {}
    topping.forEach((el)=>{
        if(ob[el]){
            ob[el].count +=1
        } else {
            ob[el] = {count:1, isCounted:false}
        }
    })
    
    let front = 0
    let back = Object.keys(ob).length
   
    topping.forEach((el)=>{
        const target = ob[el]
        if(!ob[el].isCounted) {
            ob[el].isCounted = true
            front++
        }
        
        if(ob[el].count>=1){
            ob[el].count--
            if(!ob[el].count) back--
        }
      
        if (front === back) result++;
    })
    
    return result;
}