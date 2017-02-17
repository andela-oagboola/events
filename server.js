require('dotenv').config();

var server = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./app/routes');
var app = server();

if(process.env.NODE_ENV == 'dev') {
    mongoose.connect(process.env.MONGODB_URL_DEV);
} else {
    mongoose.connect(process.env.MONGODB_URL_TEST);
}

app.use(server.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
routes(app);

app.listen('8080', function(){
    console.log('app running on port 8080');
});

module.exports = app;