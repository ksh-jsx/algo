function solution(numbers) {
    const num_list = numbers.split("").map(Number)
    const permutation = []
    const set = new Set()
    let result = 0
    
    for(let i=1;i<=num_list.length;i++){    
        permutation.push(...getPermutations(num_list, i))
    }
    
    permutation.forEach((num)=>set.add( Array.isArray(num) ? Number(num.join("")) : Number(num) ))
    
    set.forEach((num)=>{
        if(isPrime(num)) result ++
    })
    
    return result
}

const getPermutations = (arr,len) => {
    const result = []
    
    if(len === 1) return arr.map(e=>[e])
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0,index), ...origin.slice(index+1)]
        const permutations = getPermutations(rest, len-1)
        const attached = permutations.map(e=>[fixed, ...e])
        
        result.push(...attached.map((nums)=>nums.join("")))
    })

    return result
}

const isPrime = (num) => {
    if(num === 0 || num === 1) return false
    if(num === 2) return true
       
    for(let i = 2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
            return false
        }
    }
    
    return true
}