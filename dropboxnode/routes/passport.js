var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var kafka = require('./kafka/client');


module.exports = function(passport) {
    passport.use('login', new LocalStrategy(function(username, password, done) {
        var login="login-service";
        kafka.make_request('login_topic',{"username":username,"password":password, "service":login}, function(err,results)
        {
            console.log(results);
            if(err){
                done(err,{});
            }
            else
            {
                if(results.code == 200){
                    done(null,{username:username,password:password});
                }
                else {
                    done(null,false);
                }
            }
        });
    }));


};

