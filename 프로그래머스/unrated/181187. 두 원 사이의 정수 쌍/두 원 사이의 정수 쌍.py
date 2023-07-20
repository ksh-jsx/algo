import math

def solution(r1, r2):
    answer = 0
    
    for y in range(1, r2+1):
        if (r1*r1-y*y) > 0:
            min_x = math.ceil((r1*r1-y*y)**0.5)
        else:
            min_x = 0
        max_x = math.floor((r2*r2-y*y)**0.5)

        if max_x == min_x and min_x != 0:
            answer += 1
        elif max_x != min_x:
            answer += (max_x - min_x+1)
        else:
            answer += 1
            
    return answer*4