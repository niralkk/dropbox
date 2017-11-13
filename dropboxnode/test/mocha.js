var assert = require('chai').assert;
var http = require('http');
var request = require('request');
var mongo = require("../routes/mongo");
var mongoose = require("mongoose");

describe('Login test', function(){
    it('Postive Testing',
        function(done){
            var req = {username:"niral.koradiya@gmail.com",password:"123456"}
            request.post('http://localhost:3001/login',function(req,res) {
                assert.equal(201,res.statusCode);
                done();
            })
        });
});

describe('Login test', function(){
    it('Negative Testing',
        function(done){
            var req = {username:"niral.koradiya@gmail.com",password:"123456"}
            request.post('http://localhost:3001/login',function(req,res) {
                assert.equal(401, res.statusCode);
                done();
            })
        });
});


describe('Sign up test', function(){
    var statusCode = 201;
    it('Positive Testing',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/signout',function(req,res) {
                assert.equal(201, res.statusCode);
                done();
            })
        });
});

describe('Sign up test', function(){
    var statusCode = 401;
    it('Negative Testing',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/signout',function(req,res) {
                assert.equal(401, res.statusCode);
                done();
            })
        });
});


describe('Mongo DB Connection', function() {
    before(function(done) {
        mongoose.connect('mongodb://localhost:27017/login', function(error) {
            if (error) console.error('Error while connecting:\n%\n', error);
            console.log('connected');
            done(error);
        });
    });
});

describe('Mongo Connection test', function(){
    var statusCode = 201;
    it('Connection Testing',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/signout',function(req,res) {
                assert.equal(201, res.statusCode);
                done();
            })
        });
});


describe('File upload test', function(){
    var statusCode = 201;
    it('File upload',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/homepage',function(req,res) {
                assert.equal(201, res.statusCode);
                done();
            })
        });
});

describe('File download test', function(){
    var statusCode = 201;
    it('File upload',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/homepage',function(req,res) {
                assert.equal(201, res.statusCode);
                done();
            })
        });
});


describe('Group Create test', function(){
    var statusCode = 201;
    it('Group Create',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/group/create',function(req,res) {
                assert.equal(201, res.statusCode);
                done();
            })
        });
});


describe('Group delete test', function(){
    var statusCode = 201;
    it('Group delete',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/group/delete',function(req,res) {
                assert.equal(201, res.statusCode);
                done();
            })
        });
});


describe('Sign Out Test', function(){
    var statusCode = 201;
    it('Sign out',
        function(done){
            var req = {username:"niral.koradiya@gmail.com"}
            request.get('http://localhost:3001/signout',function(req,res) {
                assert.equal(201, res.statusCode);
                done();
            })
        });
});
