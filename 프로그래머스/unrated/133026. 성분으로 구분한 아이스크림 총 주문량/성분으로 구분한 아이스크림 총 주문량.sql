-- 코드를 입력하세요
SELECT I.INGREDIENT_TYPE, SUM(F.TOTAL_ORDER) AS TOTAL_ORDER
FROM FIRST_HALF F
INNER JOIN ICECREAM_INFO I ON I.FLAVOR = F.FLAVOR
GROUP BY INGREDIENT_TYPE