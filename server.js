var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var log = require("./logger");
var con = require("./Configuration");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var router1 = require('./heroesRouter');
app.use('/heroes', router1);

var heroes = require('./heroes.js');


var config = new con.Configuration(console = true,file = true, colors = true,logLevel = "error");
var logger = new log.logger('irena & roei pullrequest',config);


console.log("----------");
logger.debug(["this is", "debug debug"]);
console.log("----------");
logger.info(["this is", "infush"]);
console.log("----------");
logger.warning(["this is", "warning warning achtung achtung"]);
console.log("----------");
logger.error(["this is", "erroreoereorer"]);
console.log("----------");
logger.log("debug",["this", "is", "debuuuugg"]);


module.exports = http.listen(3000, function(){
	console.log('listening on *:3000');
});
