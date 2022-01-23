'''
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오..
'''
def is_prime(a):
    if a<2 : return 0
    for i in range(2,a):
        if a%i == 0:
            return 0
    return 1

x= int(input())
arr = list(map(int, input().split()))
sum=0
if x == len(arr):
    for i in arr:
        sum = sum+is_prime(i)

print(sum)
	
