var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var router1 = require('./heroesRouter');
app.use('/heroes', router1);

var heroes = require('./heroes.js');


module.exports = http.listen(3000, function(){
	console.log('listening on *:3000');
});
