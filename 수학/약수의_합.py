'''
두 자연수 A와 B가 있을 때, A = BC를 만족하는 자연수 C를 A의 약수라고 한다.
예를 들어, 2의 약수는 1, 2가 있고, 24의 약수는 1, 2, 3, 4, 6, 8, 12, 24가 있다.
자연수 A의 약수의 합은 A의 모든 약수를 더한 값이고, f(A)로 표현한다.
x보다 작거나 같은 모든 자연수 y의 f(y)값을 더한 값은 g(x)로 표현한다.

자연수 N이 주어졌을 때, g(N)을 구해보자.
'''

def getDIvisor1(n): # n%i==0을 찾는 방식으로 약수를 구하는 방법
    res=0
    
    for j in range(1,n+1):
        if n%j==0:
            res += j
    return res
    
def getDIvisor2(n): # 약수는 서로 대칭구조를 이루고 있으므로 1부터 √n까지의 약수를 구하는 방법
    res=0
    for i in range(1, int(n**(1/2)) + 1):
        if (n % i == 0):
            res+=i
            if ( (i**2) != n) : #25같은 수의 5가 2번 들어가는 것을 방지하기 위해
               res+=(n // i)
    
    return res

x=int(input())
for _ in range (x):
    n=int(input())
    res = 0
    for i in range(1, n+1):
        res += (n//i)*i
        #res += getDIvisor2(i)

    print(res)
