var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password123',
  database : 'join_us'
});

// var q = 'SELECT COUNT(*) as total FROM users'

var person = {email: faker.internet.email()};

connection.query('INSERT INTO users SET ?', person,  function(error, result)
 {
  if(error)
   {
      throw error;
   }
  else
   {
      console.log(result);
   }  
});

/*
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
}); */
connection.end();