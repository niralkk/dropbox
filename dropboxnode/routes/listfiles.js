var fs = require('fs');
var ejs = require('ejs');
var testFolder = './uploads/';
var mysql = require('mysql');
function listfiles(req,res)
{
				var response = "";
				testFolder += req.session.email;
				fs.readdir(testFolder, function (err, files) 
				{
				
					console.log(files);
					var responseJson = files;
					console.log(responseJson);
					res.setHeader('Content-Type', 'application/json');
					res.send(JSON.stringify(responseJson));
				});
}
 
function starfile(req,res)
{
	var star = true;
	console.log("In starfile method!!!!!!!!!!!!!!"+req.param("file"));
	var starfilequery = "INSERT into files(star) VALUES('"+star+"') where filename='"+req.param("file")+"'";
	console.log(starfilequery);
		mysql.starfilesql(function(err)
                   	{
						if(err)
						{
							throw err;
						}
						else 
						{
							let responseJson = ({
								status: 201
							})
							res.send(JSON.stringify(responseJson));
						}
					},starfilequery);		
}
exports.listfiles = listfiles;
exports.starfile = starfile;