function solution(price) {
    let target = price

    if(price>=500000)      target -= target * (20 / 100)
    else if(price>=300000) target -= target * (10 / 100)
    else if(price>=100000) target -= target * (5 / 100)

    return Math.floor(target)
}