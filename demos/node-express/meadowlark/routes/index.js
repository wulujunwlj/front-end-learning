var express = require('express');
var router = express.Router();

var fortune = require('./../libs/fortune.js');

router.get('/', function(req, res) {
	var user = {
		name: 'ksh',
		age: 8
	};

	res.render('home', {
		title: 'home',
		user: JSON.stringify(user)
	});
});

router.get('/about', function(req, res) {
	
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

	res.render('about', {
		title: 'About',
		fortune: randomFortune
	});
});

router.use(function(req, res, next) {
	res.status(404);
	res.render('404', {
		errMsg: 'Sorry, page not found...'
	});
});

router.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500', {
		errMsg: 'Something wrong accred on server...'
	});
});

module.exports = router;