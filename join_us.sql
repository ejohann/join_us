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

