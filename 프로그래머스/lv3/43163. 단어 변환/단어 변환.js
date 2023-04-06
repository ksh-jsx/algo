function solution(begin, target, words) {
    if(words.find((word)=> word === target) === undefined) return 0
    
    const {length} = begin
    
    const getNext = (target_word,target_words,cnt) => {
        const target_arr = target_word.split("")

        const new_words = target_words.filter((word) => {
            const word_arr = word.split("")
            let discord_cnt = 0

            for(let j=0;j<length;j++){
                if(target_arr[j] !== word_arr[j]) discord_cnt++
            }

            return discord_cnt < 2
        })

        if(new_words.length){
            if(new_words.find((word) => word === target)) return cnt
            cnt++
            
            for(let i=0;i<new_words.length;i++){
                const word = new_words[i]
                const temp = [...target_words]
                const idx = target_words.findIndex((e) => e === word)
                temp.splice(idx,1)

                return getNext(word,temp,cnt)
            }
            
        } else {
            return 0
        }
    }

    return getNext(begin,words,1)
  
}