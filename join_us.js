var faker = require('faker');
var mysql = require('mysql');

var config = require('./config.js');
var connection = mysql.createConnection(config.databaseOptions);

var data = [];
var users = 5; // change this value to the amount of users to be created
for(var i = 0; i < users; i++)
  {
    data.push([
    faker.internet.email(), 
    faker.date.past()
  ]);
  }

var q = 'INSERT INTO users (email, created_at) VALUES ? ';

connection.query(q, [data], function(error, results)
 {
  if(error)
   {
      throw error;
   }
  else
   {
      console.log(results);
   }  
})

connection.end();

