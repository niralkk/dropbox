var express = require('express');
var mysql = require('./mysql');
var router = express.Router();

var users = [
    {
        username: "Mike",
        password: "mike123"
    },
    {
        username: "Tom",
        password: "tom123"
    },
    {
        username: "John",
        password: "john123"
    },
    {
        username: "Mac",
        password: "mac123"
    }
];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doLogin', function (req, res, next) {

    var reqUsername = req.body.username;
    var reqPassword = req.body.password;


    var getuser = "select * from userdetails where username='"+reqUsername+"' and password='" +reqPassword+"'";

    mysql.fetchdata(function(err, results) {
        if(err) {
            throw err;
        }
        else 
        {
            if(results.length > 0) {
                console.log("Valid Login");
                res.status(201).json({message: "Login successful"})
            }
            else {
                console.log("Invalid Login");
                res.status(401).json({message: "Login failed"});
            }
        }  
    }, getuser);

    // Just checking if the username is in our user's array
    // var theUser = users.filter(function(user){
    //     return user.username === reqUsername;
    // });

    // Check the password
    // if(theUser.length === 1){
    //     theUser[0].password === reqPassword &&
    //     res.status(201).json({message: "Login successful"}) ||
    //     res.status(401).json({message: "Login failed"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }


    // if(theUser.password === reqPassword){
    //     res.status(201).json({message: "Login successful"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }

});


router.post('/doSignup', function (req, res, next) {

    var postsignup  = {
        Firstname : req.body.firstname,
        Lastname : req.body.lastname,
        Email : req.body.email,
        Username : req.body.username,
        Password : req.body.password
    };

    console.log("Insert parameters:"+ postsignup.fname);

    mysql.insertdata(function(err,results) {
        if(err) {
            throw err;
        } 
    }, postsignup);

    // Just checking if the username is in our user's array
    // var theUser = users.filter(function(user){
    //     return user.username === reqUsername;
    // });

    // Check the password
    // if(theUser.length === 1){
    //     theUser[0].password === reqPassword &&
    //     res.status(201).json({message: "Login successful"}) ||
    //     res.status(401).json({message: "Login failed"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }


    // if(theUser.password === reqPassword){
    //     res.status(201).json({message: "Login successful"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }

    res.status(201).json({message: "Sign Up successful"});
});


module.exports = router;