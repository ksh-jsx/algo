function solution(want, number, discount) {
    let result = 0
    
    const isAllDiscount = (discount_list) => {
        const target_obj = {}

        discount_list.forEach((e)=>target_obj[e] = (target_obj[e] || 0 ) + 1)

        for(let j=0;j<want.length;j++){
            const discount_item = target_obj[want[j]]
            const want_count = number[j]

            if(discount_item === undefined || discount_item < want_count){
                return false
            }
        }   
        return true
    }
    
    for(let i=0;i<=discount.length-10;i++){
        const target_discount = discount.slice(i,i+10)
        if(isAllDiscount(target_discount)) result++
    }
    
    return result
}

