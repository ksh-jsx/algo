-- 코드를 입력하세요
SELECT B.CATEGORY, SUM(SALES) AS TOTAL_SALES
FROM (SELECT * FROM BOOK_SALES  WHERE SALES_DATE LIKE '2022-01%') S
LEFT JOIN BOOK B ON S.BOOK_ID=B.BOOK_ID
GROUP BY CATEGORY
ORDER BY 1