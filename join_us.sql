CREATE DATABASE join_us;

USE join_us;

CREATE TABLE users(
	email VARCHAR(255) PRIMARY KEY,
	created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO users(email) VALUES ('katie34@yahoo.com'), ('tunde99@yahoo.com');


-- CHALLENGE 1 - Earliest date a user has joined

SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY created_at ASC LIMIT 1;

SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') AS earliest_date FROM users;

-- CHALLENGE 2 - Find Email of the earliest user

SELECT email, created_at FROM users WHERE created_at = (SELECT created_at FROM users ORDER BY created_at ASC LIMIT 1);

SELECT email, created_at FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);


-- CHALLENGE 3 group users by the month they joined

SELECT DATE_FORMAT(created_at, '%M') AS month, COUNT(*) AS count FROM users GROUP BY month ORDER BY count DESC;

SELECT MONTHNAME(created_at) AS month, COUNT(*) FROM users GROUP BY month ORDER BY count DESC;


 -- CHALLENGE 4 count of number of users with yahoo emails 

 SELECT COUNT(*) AS yahoo_users FROM users WHERE email = (SUBSTR(email FROM -9 FOR 9) != 'yahoo.com');

 SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%yahoo.com';


-- count of number of users with each email host 

 SELECT
       CASE
        WHEN SUBSTR(email, -9, 9) IN ('gmail.com') THEN 'gmail'
 		WHEN SUBSTR(email, -9, 9) IN ('yahoo.com') THEN 'yahoo'
 		WHEN SUBSTR(email, -11, 11) IN ('hotmail.com') THEN 'hotmail'
 		ELSE 'other'
       END AS provider,
       COUNT(*)
 		AS total_users
 		FROM users GROUP BY provider ORDER BY total_users DESC;