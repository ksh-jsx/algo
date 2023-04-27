function solution(book_time) {
    const using_room = []
    const sorted_book = book_time.sort((a,b) => Number(a[0].replace(":","")) - Number(b[0].replace(":","")))
        .map((time)=> [Number(time[0].replace(":","")),make_new_time(...time[1].split(":"))])
    
    //console.log(sorted_book)

    sorted_book.forEach((time)=>{        
        const [start,end] = time

        const target = using_room.findIndex((room)=>room[1]<=start)
        
        if(target === -1){
            using_room.push([using_room.length,end])    
        } else {
           using_room[target][1] = end
        }
        //console.log(using_room)
    })
    return using_room.length
}

const make_new_time = (h,m) => {
    let new_h = Number(h)
    let new_m = Number(m)
    
    if(new_m+10 > 59) {
        new_h += 1
        new_m -= 60
    }
    //if(new_h < 0) new_h = 23
    new_m += 10
    if(new_m<10) new_m = '0'+String(new_m)
    
    return Number(String(new_h)+String(new_m))
}