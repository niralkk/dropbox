var mongo = require('./mongo');
var mongoURL = "mongodb://localhost:27017/login"
var bcrypt = require('bcrypt');

function handle_request(msg, callback){

    var res = {};
    var username = msg.username;
    var password = msg.password;
    try {
        mongo.getConnection((connectionnumber, db)=>{
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = db.collection('users');
            console.log("Username:" +username);
            console.log(password);
            var query = { username: username };
            coll.findOne(query,function(err, results) {

                console.log("Result" + JSON.stringify(results));

                if(err){
                    callback(err, res);
                } else {
                    console.log("Results: "+results.password);
                    if (bcrypt.compareSync(password, results.password)) {
                        console.log("login succes!!!");
                        res.code = "200";
                        res.value = "Success Login";
                        res.username = username;
                        res.password = password;
                        res.results = results;
                        callback(null, res);
                    } else {
                        res.code = "401";
                        res.value = "Failed Login";
                        callback(null, res);
                    }
                }
            });
        });
    }
    catch (e){
        callback(e,{});
    }
}
exports.handle_request = handle_request;