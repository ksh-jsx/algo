def solution(prices):
    answer = []
    length = len(prices)-1
    
    for i in range(length):
        sec=0
        
        for j in range(i,length):
            if prices[i] <= prices[j]:
                sec+=1
            else :
                break
                
        answer.append(sec)
    answer.append(0)
    
    return answer
            