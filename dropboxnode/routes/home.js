//var ejs = require("ejs");
var mysql = require('./mysql');
var fs = require('fs');
const crypto = require('crypto');

function authenticate(req,res)
{
	var email = req.param("email");
	console.log(email);
	req.session.email = email;
	var checkUser="select * from userdetails where Email='"+req.param("email")+"'";
	console.log("Query is:"+checkUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length)
			{
				
				let user = results[0];
				console.log(results);
				var password_hash = results[0].Password;
	  			var salt = results[0].Salt;

	  			// compute password hash of given password
	  			var _hash = crypto.createHmac('sha512', salt);
	  			_hash.update(req.body.password);
	  			var _password_hash = _hash.digest('hex');

	  			// Check input password with stored password
	  			if(_password_hash !== password_hash){
	  				res.status(401).json({"error": "Incorrect Password"});
	  			}
				let responseJson = ({
					status: 201,
                            user : {email: user.Email,
                            firstName: user.Firstname,
                            lastName: user.Lastname,
                            
                            token: 'fake-jwt-token'}
                        });

                console.log(responseJson);        
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(responseJson));
			}
			else 
			{    
				let responseJson = ({
					error : 'error',
					status: 500
				})
				console.log(responseJson); 
				console.log("Invalid Login");       
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(responseJson));
				
				/*let responseJson={
					status: 'invalid'
				};
				console.log(responseJson);
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify({responseJson}));*/
			}
		}  
	},checkUser);



}

function register(req,res) 
{
	crypto.randomBytes(256, function(err, buffer){
		if(err) res.status(500).json({"error": "Cannot create salt"});
		else{
	var salt = buffer.toString('hex');
	
	// create hash from salt
	var hash = crypto.createHmac('sha512', salt);
	hash.update(req.body.password);
	
	//update hash by password
	var password_hash = hash.digest('hex');


	var addUser= "INSERT INTO userdetails(Firstname,Lastname,Email,Password,Salt) VALUES ('"+req.param("firstName")+"','"+req.param("lastName")+"','"+req.param("email")+"','"+password_hash+"','"+salt+"')";
	console.log("query is"+addUser);
	
	mysql.addUser(function(err){
	if(err)
	{
		throw err;
	}
	else
	{
		fs.mkdir("./uploads/" + req.param("email"), function(err) {
		if (!err) {
		console.log("directory created");
		} 
		else {
		return res.end("Dir creation failed : " + err);
		}
		});
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({}));

	}
},addUser);
		}
	});
}

function getuserdetails(req,res)
{
	var getuser = "select * from userdetails where Email = '"+req.param("email")+"'";
	console.log(getuser);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length)
			{
				let user = results[0];
				console.log(results);
				let responseJson = ({
				
                           	email: user.Email,
                            firstName: user.Firstname,
                            lastName: user.Lastname,
                            password: user.Password
                      		
                        });

                console.log(responseJson);        
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(responseJson));
			}
		}

})
}

exports.authenticate = authenticate;
exports.register= register;			
exports.getuserdetails = getuserdetails;