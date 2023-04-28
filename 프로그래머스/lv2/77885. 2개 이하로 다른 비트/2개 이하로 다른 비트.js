// function solution(numbers) {
//    const result = []
   
//    numbers.forEach((dec)=>{
//        let target_dec = dec+1
       
//        while(true){    
//            if(countDifferentBits(dec,target_dec)<3) break
           
//            target_dec++
//        }
       
//        result.push(target_dec)
//    })
    
//    return result
// }

// function countDifferentBits(a, b) {
//   let count = 0
//   const binaryA = ('0'+parseInt(a).toString(2)).split("")
//   const binaryB = parseInt(b).toString(2).split("")
  
//   if(binaryB.length < binaryA.length) binaryB.unshift('0')
    
//   const maxLength = Math.max(binaryA.length, binaryB.length)

//   for (let i = 0; i < maxLength; i++) {
//     if (binaryA[i] !== binaryB[i]) {
//       count++
//     }
//   }

//   return count
// }

function solution(numbers) {
    const tmp = numbers.map((v,i) => {    
        let toStr = v.toString(2).split('').reverse().indexOf('0')

        if(toStr === -1) return v + 2 ** (v.toString(2).length - 1)
        return v + Math.ceil(2 ** (toStr -1))
    });

    return tmp
}