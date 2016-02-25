var express = require('express');
var router = express.Router();
// var fs = require('fs');

router.get('/', function(req, res) {
	res.render('websites/index')
});

router.get('/index', function(req, res) {
	// fs.readFile('data/websites/classify.json', function(err, data) {
	// 	// if (err) {
	// 	// 	throw err;
	// 	// }

	// });
		res.send('111');
})

router.get('/qq', function(req, res) {
	res.render('websites/qq');
});

module.exports = router;