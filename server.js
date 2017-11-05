var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var heroes = require('./heroes.js');

app.route('/heroes')
	.get(function (req, res) {
		res.send(heroes);
	})

	.post(function (req, res) {
		var newHero = req.body;
		heroes.push(newHero);
		res.send(heroes);
	})

	.delete(function (req, res) {
		for (var i=-0; i<heroes.length; i++) {
			if(heroes[i].name.contains(req.query['name'])) {
				heroes.splice(i, 1);
			}
		}
		res.send(heroes);
	});

app.route('/heroes/:id')
	.get(function (req, res) {
		res.send(heroes[req.params.id-1])
	})

	.put(function (req, res) {
		for (var i=0; i<heroes.length; i++) {
			if (heroes[i].id === req.params.id-1) {
				heroes[i].name = req.query['name'];
				break;
			}
		}
		res.send(heroes[i])
	})

	.delete(function (req, res) {
		for (var i=0; i<heroes.length; i++) {
			if (heroes[i].id == req.params.id) {
				heroes.splice(i, 1);
			}
		}
		res.send(heroes)
	});

http.listen(3000, function(){
	console.log('listening on *:3000');
});