#https://programmers.co.kr/learn/courses/30/lessons/86051?language=python3

def solution(numbers):
    answer = -1
    num_list = [1,2,3,4,5,6,7,8,9,0]
    res_list = []
    for i in num_list:
        if i not in numbers:
           res_list.append(i) 
    answer = sum(res_list)    
    return answer