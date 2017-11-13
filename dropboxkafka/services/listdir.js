var mongoURL = "mongodb://localhost:27017/login";
var mongo = require('./mongo');
var fs = require('fs');

function handle_request(msg, callback){

    var res = {};
    var response = "";
    var testFolder = "./services/"+msg;
    console.log('in test folder'+testFolder);
    fs.readdir(testFolder, function (err, files)
    {
        console.log('this is files length'+files.length);
        console.log(files);
        for(var i=0;i<files.length;i++)
        {
            if(i<files.length-1)
            {
                response += files[i]+"<br>";
            }
            else {
                response += files[i];
            }
        }
        res.code = "200";
        res.value = response;
        console.log('this is the res.value'+res.value);
        callback(null,res.value);
    });
}
exports.handle_request = handle_request;