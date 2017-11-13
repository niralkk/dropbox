var connection =  new require('./kafka/Connection');
var login = require('./services/login');
var signup = require('./services/signup');
var listdir = require('./services/listdir');

var consumer = connection.getConsumer('login_topic');
var producer = connection.getProducer();
var consumer_list = connection.getConsumer('list_topic');

console.log('server is running');
consumer.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    console.log(data);
    if(data.data.service === "signup-service")
    {
        console.log("signup");
        signup.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
    }
    else if(data.data.service === "login-service")
    {
        console.log("login");

        login.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
    }
    else
    {
        console.log("else");
    }
});

consumer_list.on('message', function(message){
    console.log('message received on consumer_list topic');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    listdir.handle_request(data.data, function(err, res){
        console.log('this is the server file '+res);
        var payloads = [
            {
                topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        console.log('this is the payloads data'+payloads);
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});