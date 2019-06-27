CREATE DATABASE join_us;

USE join_us;

CREATE TABLE users(
	email VARCHAR(255) PRIMARY KEY,
	created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO users(email) VALUES ('katie34@yahoo.com'), ('tunde99@yahoo.com');


-- Earliest date a user has joined

SELECT DATE_FORMAT(created_at, '%M %D %Y')
		AS earliest_date
		FROM users
		ORDER BY created_at ASC LIMIT 1;

-- Find Email of the earliest user

SELECT email, 
		created_at
		FROM users WHERE created_at = (SELECT created_at FROM users ORDER BY created_at ASC LIMIT 1);


-- group users by the month they joined

SELECT DATE_FORMAT(created_at, '%M')
 			AS month,
 			COUNT(*) AS count 
 			FROM users
 			GROUP BY month ORDER BY count DESC;