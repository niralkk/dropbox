var ejs= require('ejs');
var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'niral',
		database : 'dropbox',
		port	 : 3306
	});
	return connection;
}


function insertdata(callback, postdata) {

	var connection = getConnection();
	console.log(postdata);

	connection.query('INSERT INTO userdetails SET ?', postdata, function (err, result) {
		if (err) {
			throw err;
		}
		else {
			console.log("1 user created");
		}
	});
	connection.end();
}

function fetchdata(callback, sqlquery) {

	console.log("\nSQL Query::"+sqlquery);

	var connection = getConnection();

	connection.query(sqlquery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+ rows);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}	

exports.fetchdata = fetchdata;
exports.insertdata = insertdata;