var heroes = [
	{id:1, name:"roy"},
	{id:2, name:"x"},
	{id:3, name:"b"}
];
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/heroes')
	.get(function (req, res) {
		res.send(heroes)
	})

	.post(function (req, res) {
		var newHero = req.body;
		heroes.push(newHero);
		res.send(heroes);
	})

	.delete(function (req, res) {
		for (var i=-0; i<heroes.length; i++) {
			if(heroes[i].name == req.query['name']) {
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
				heroes[i].name = "check"; //heroes[i].name = req.params.name;
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