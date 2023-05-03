function solution(orders, course) {
    const {length} = orders
    const result = {}
    let new_result = []
    
    orders.sort((a,b)=>b.length - a.length) 
    
    for(let i=0; i<length;i++){
        const target = orders.pop().split("")
        const filtered_orders = orders.forEach((order)=>{
            const combi = hasCommonElements(order.split(""),target,course)
            
            if(combi.length){
                combi.forEach((e)=>{
                    result[e] ? result[e]+=1  : result[e]=1
                })  
            } 
        })
    }

    course.forEach((num)=>{
        const filteredCourse = Object.fromEntries(
            Object.entries(result).filter(([course,_]) => course.length === num)
        );
        
        const maxValue = Math.max(...Object.values(filteredCourse));

        const maxs = Object.keys(filteredCourse).reduce((acc, key) => {
            if (filteredCourse[key] === maxValue) {
                acc[key] = filteredCourse[key];
            }
            return acc;
        }, {});
        new_result = [...new_result,...Object.keys(maxs)]    
    })
    
    return new_result.sort()
}

function hasCommonElements(arr1, arr2, course) {
    let combination = []
    const common = arr1.filter((item) => arr2.includes(item));

    for(let i=0;i<course.length;i++){
        if(course[i]>common.length) break
        combination = [...combination,...getCombinations(common, course[i])]
    }

    return combination;
}

function getCombinations(arr, n) {
  const result = [];

  function generateCombos(start, combo) {
    if (combo.length === n) {
      result.push(combo.sort().join(""));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      generateCombos(i + 1, combo.concat(arr[i]));
    }
  }

  generateCombos(0, []);

  return result;
}