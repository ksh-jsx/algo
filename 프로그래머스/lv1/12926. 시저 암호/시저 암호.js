function solution(s, n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const words = s.split("")
    const newWords = words.map((word) => {
        const idx = alphabet.findIndex((s)=> s === word.toLowerCase())
        
        if(idx === -1) return word

        const upperWord = isUpper(word)
        const newAlphabet = alphabet[idx+n > 25 ? idx+n-26 : idx+n]
        return upperWord ? newAlphabet.toUpperCase() : newAlphabet
    })
    
    return newWords.join("")
}

const isUpper = (strValue) => {
    const ascii = strValue.charAt(0);
    return ascii === ascii.toUpperCase()
}