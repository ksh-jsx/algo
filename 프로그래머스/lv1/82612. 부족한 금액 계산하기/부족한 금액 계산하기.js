function solution(price, money, count) {
    let total_price = 0

    for(let i=0;i<count;i++){
        total_price+=(i+1)*price
    }

    return total_price - money > 0 ? total_price - money : 0
}