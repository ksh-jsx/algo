function solution(m, musicinfos) {
    let result = ["",0]
    const replacedM = m.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());
    
    musicinfos.forEach((musicinfo)=>{
        let [start,end,name,code] = musicinfo.split(",")
        code = code.replace(/(C|D|F|G|A)#/g, (_, a) => a.toLowerCase());
        
        const timeDiff = getMinuteDifference(start,end)
        const newCode = repeatString(code,timeDiff)
        
        if(newCode.indexOf(replacedM) !== -1){
            console.log(name,timeDiff)
            if(result[1]<timeDiff) result = [name,timeDiff]
        }
        
    })
    
    return result[0] ? result[0] : "(None)"
}

function getMinuteDifference(time1, time2) {
  const [hour1, minute1] = time1.split(':').map(Number);
  const [hour2, minute2] = time2.split(':').map(Number);

  const totalMinute1 = hour1 * 60 + minute1;
  const totalMinute2 = hour2 * 60 + minute2;

  return Math.abs(totalMinute1 - totalMinute2);
}

function repeatString(str, n) {
  let repeatedString = '';

  while (repeatedString.length < n) {
    repeatedString += str;
  }

  return repeatedString.slice(0, n);
}