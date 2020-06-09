var Connection = require('mysql');

/* Create Connection to Database */
var con = Connection.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crime_test"
});


 module.exports=con;



