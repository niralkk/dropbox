var express = require('express');
var router = express.Router();
var multer = require('multer');
var glob = require('glob');
var mv = require('mv');
var Router = require('router')
var router = Router()
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/'+req.session.email);
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});

var upload = multer({storage:storage});

/* GET users listing. */

router.post('/upload', upload.any(), function (req, res, next) {
  console.log(req.sessionID);
  console.log("hey its auth" + req.session.email);
       console.log(req.uploads);
        mv("./uploads/" + req.uploads[0].filename, "./uploads/" +req.session.email+ "/"
                + req.uploads[0].filename, function(err) {
            if (err) {
                console.log(err);
            }
        });
               res.status(204).end();
});


module.exports = router;