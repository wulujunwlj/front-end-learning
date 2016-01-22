var express = require('express');
var fs = require('fs');

var router = express.Router();

router.get('/', function(req, res, next) {
	fs.readFile('data/main.json', function(err, data) {
		if(err) throw err;

		res.render('index', { title: 'Angular seeds', text: data });

	});


});

module.exports = router;