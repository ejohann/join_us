var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password123',
  database : 'join_us'
});

// var q = 'SELECT COUNT(*) as total FROM users'

var q = 'INSERT INTO users (email) VALUES ("felix_the_cat@gmail.com")';

connection.query(q, function(error, results, fields)
 {
  if(error)
   {
      throw error;
   }
  else
   {
      console.log(results);
   }  
});
connection.end();