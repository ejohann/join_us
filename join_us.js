var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password123',
  database : 'join_us'
});


var data = [];
for(var i = 0; i < 500; i++)
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








// var q = 'SELECT COUNT(*) as total FROM users'

/*
var person = {
        email: faker.internet.email(),
        created_at: faker.date.past()
};

var end_result = connection.query('INSERT INTO users SET ?', person,  function(error, result)
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
*/

//console.log(end_result.sql);

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
