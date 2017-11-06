var express = require("express");
var router = express.Router();
var heroes = require('./heroes.js');

	router.get('/', function (req, res) {
		res.send(heroes);
	})

	router.post('/', function (req, res) {
		var newHero = req.body;
		heroes.push(newHero);
		res.send(heroes);
	})

	router.delete('/', function (req, res) {
		for (var i=-0; i<heroes.length; i++) {
			if(heroes[i].name.contains(req.query['name'])) {
				heroes.splice(i, 1);
			}
		}
		res.send(heroes);
	});


	router.get('/:id', function (req, res) {
		res.send(heroes[req.params.id-1])
	})

	router.put('/:id', function (req, res) {
		for (var i=0; i<heroes.length; i++) {
			if (heroes[i].id === req.params.id-1) {
				heroes[i].name = req.query['name'];
				break;
			}
		}
		res.send(heroes[i])
	})

	router.delete('/:id', function (req, res) {
		for (var i=0; i<heroes.length; i++) {
			if (heroes[i].id == req.params.id) {
				heroes.splice(i, 1);
			}
		}
		res.send(heroes)
	});

module.exports = router;