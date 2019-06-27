var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password123',
  database : 'join_us'
});

var q = 'SELECT DAYNAME(CURDATE()) AS today, CURTIME() AS time, CURDATE() AS date'
connection.query(q, function(error, results, fields)
 {
  if(error)
   {
      throw error;
   }
  else
   {
      console.log('Today is: ', results[0].today);
      console.log('Time is: ', results[0].time);
      console.log('Date is: ', results[0].date);
   }  
});
connection.end();