var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
	// fs.readFile('data/websites/classify.json', function(err, data) {
	// 	if (err) {
	// 		throw err;
	// 	}
	// 	// res.render('websites/index', {data: data});
	// });

	res.send('websites/index', {data: '112'})
});

router.get('/qq', function(req, res) {
	res.render('websites/qq', {
		'title': '腾讯首页'
	});
});

router.get('/sina', function(req, res) {
	res.render('websites/sina', { title: 'sina' });
})

module.exports = router;