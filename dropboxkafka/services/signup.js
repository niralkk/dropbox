var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";


function handle_request(msg, callback){

    var res = {};
    var username = msg.username;
    var password = msg.password;
    console.log("In handle request:"+ JSON.stringify(msg));
    try {
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('users');

            coll.insertOne(msg, function(err, user){
                if (user) {
                    res.code = "201";
                    res.value = "Success Signup";
                    res.username = username;
                    res.password = password;
                    callback(null, res);

                } else {
                    res.code = "400";
                    res.value = "Failed Signup";
                    callback(null, {});
                }
            });
        });
    }
    catch (e){
        callback(e,{});
    }
}

exports.handle_request = handle_request;