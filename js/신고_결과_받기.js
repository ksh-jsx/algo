/*https://programmers.co.kr/learn/courses/30/lessons/92334 */
function solution(id_list, report, k) {
    var answer = [];

    var user = []
    id_list.map(x=>{
        user.push({name:x,report:0,report_user:[],get_mail:0})
    })
    const set = new Set(report)
    report = [...set] 
    report.map(x=>{
        var tmp_arr = x.split(' ')
        user.find(x => x.name===tmp_arr[0]).report_user.push(tmp_arr[1])
        user.find(x => x.name===tmp_arr[1]).report +=1
    })
    user.map(x=>{
        if(x.report >= k){
            user.map(y=>{
                if(y.report_user.indexOf(x.name)!=-1)
                    y.get_mail+=1
            })
        }
    })
    user.map(x=>answer.push(x.get_mail))
    
    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2)